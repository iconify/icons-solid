import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/j0u10clck.css';
import '../../css/s/syijdv6yb.css';
import '../../css/a/a640c-yzx.css';
import '../../css/c/cx_hk-71w.css';
import '../../css/q/qdby4dbym.css';
import '../../css/y/yvto6wy1k.css';
import '../../css/c/cpcfhpbfa.css';
import '../../css/g/gmwf64byv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="j0u10clck wm-shadow"/><path class="syijdv6yb"/><path class="a640c-yzx"/><path class="cx_hk-71w"/><path class="qdby4dbym"/><path class="yvto6wy1k"/><path class="cpcfhpbfa wm-shine"/><path class="gmwf64byv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:certificate"} {...others} />);
}

export default Component;
