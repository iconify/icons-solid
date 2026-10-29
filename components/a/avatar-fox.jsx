import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/v713ktb4j.css';
import '../../css/a/a89mk9nnv.css';
import '../../css/o/oe173cbpa.css';
import '../../css/q/q9vwjmb_e.css';
import '../../css/w/wnjpafb2c.css';
import '../../css/p/pc0yoybtf.css';
import '../../css/z/zv1q7yeoc.css';
import '../../css/h/hliflemtp.css';
import '../../css/s/shilnfbvj.css';
import '../../css/a/ang8pkbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="v713ktb4j wm-shadow"/><path class="a89mk9nnv"/><path class="oe173cbpa"/><path class="q9vwjmb_e"/><path class="wnjpafb2c"/><path class="pc0yoybtf"/><path class="zv1q7yeoc"/><path class="hliflemtp wm-shine"/><path class="shilnfbvj wm-deco"/><path class="ang8pkbsr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:avatar-fox"} {...others} />);
}

export default Component;
