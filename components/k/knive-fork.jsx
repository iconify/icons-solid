import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sprkccr_w.css';
import '../../css/o/o5k3y_btt.css';
import '../../css/p/pms32xb-c.css';
import '../../css/g/gywsm-bsw.css';
import '../../css/f/fzpit_b_s.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sprkccr_w"/><path class="o5k3y_btt"/><path class="pms32xb-c"/><path class="gywsm-bsw"/><path class="fzpit_b_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:knive-fork"} {...others} />);
}

export default Component;
