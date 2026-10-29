import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5odp6zou.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fhm_ww6im.css';
import '../../css/k/kihtk9b6s.css';
import '../../css/q/q7-grqbie.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nq3vznqjh.css';
import '../../css/j/jl_d46b-p.css';
import '../../css/w/wohfovbtp.css';
import '../../css/y/y7ndy2bec.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGI0SMHels" class="l5odp6zou"/></defs><g class="t_2lkqbxb"><path class="fhm_ww6im wm-shadow"/><path class="kihtk9b6s"/><path class="q7-grqbie"/><use href="#SVGI0SMHels" class="d2kvgvbvc"/><path class="nq3vznqjh"/><use href="#SVGI0SMHels" class="d2kvgvbvc"/><path class="jl_d46b-p"/><path class="wm-shine wohfovbtp"/><path class="wm-deco y7ndy2bec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:briefcase"} {...others} />);
}

export default Component;
