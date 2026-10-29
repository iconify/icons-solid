import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/f0a8y0bqx.css';
import '../../css/y/yesrijbvn.css';
import '../../css/p/pfcf_ju7o.css';
import '../../css/s/snrvq63ty.css';
import '../../css/e/embs_vbgy.css';
import '../../css/s/shilnfbvj.css';
import '../../css/a/ang8pkbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="f0a8y0bqx wm-shadow"/><path class="yesrijbvn"/><path class="pfcf_ju7o"/><path class="snrvq63ty"/><path class="embs_vbgy wm-shine"/><path class="shilnfbvj wm-deco"/><path class="ang8pkbsr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chart-spline"} {...others} />);
}

export default Component;
