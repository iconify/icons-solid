import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hfbsm1a_v.css';
import '../../css/c/cb880f6mo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="hfbsm1a_v"/><path class="cb880f6mo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hanger-two"} {...others} />);
}

export default Component;
