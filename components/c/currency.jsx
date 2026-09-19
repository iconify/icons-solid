import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/h-gu33b2a.css';
import '../../css/v/vbp-vzbjn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="h-gu33b2a"/><path class="vbp-vzbjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:currency"} {...others} />);
}

export default Component;
