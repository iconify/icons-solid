import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/t4rb9370j.css';
import '../../css/z/zr_dd8ohf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="t4rb9370j"/><path class="zr_dd8ohf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:corner-right-up"} {...others} />);
}

export default Component;
