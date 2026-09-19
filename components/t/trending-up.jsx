import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pe1a9hbbo.css';
import '../../css/h/hxlui3l7w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="pe1a9hbbo"/><path class="hxlui3l7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:trending-up"} {...others} />);
}

export default Component;
