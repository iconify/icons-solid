import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iel7j_82h.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/y74v9pbjp.css';
import '../../css/k/kpuf-qbgb.css';
import '../../css/d/dlmw_cpuv.css';
import '../../css/j/jkso0abkr.css';
import '../../css/e/ev3p7s7ep.css';
import '../../css/r/rggdpsbko.css';
import '../../css/z/zjly8qbii.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGzMzjSLQg" class="iel7j_82h"/></defs><g class="t_2lkqbxb"><path class="wm-shadow y74v9pbjp"/><path class="kpuf-qbgb"/><path class="dlmw_cpuv"/><use href="#SVGzMzjSLQg" class="wm-deco"/><path class="jkso0abkr"/><path class="ev3p7s7ep"/><path class="rggdpsbko"/><path class="wm-shine zjly8qbii"/><use href="#SVGzMzjSLQg" class="wm-deco"/><path class="iqhjyybzt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:percent"} {...others} />);
}

export default Component;
