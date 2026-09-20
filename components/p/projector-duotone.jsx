import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-o1p6w1m.css';
import '../../css/n/n21bf1bpn.css';
import '../../css/e/es26l_lfc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="v-o1p6w1m"/><path clip-rule="evenodd" class="n21bf1bpn"/><path class="es26l_lfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:projector-duotone"} {...others} />);
}

export default Component;
