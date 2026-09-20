import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7pb2cc9j.css';
import '../../css/x/x101xt1iv.css';
import '../../css/s/sve3dcbkk.css';
import '../../css/h/horqyhbht.css';
import '../../css/m/mnm0pp_et.css';
import '../../css/i/iq8ofjb5k.css';
import '../../css/n/nj_h_n1so.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e7pb2cc9j"/><path class="x101xt1iv"/><path class="sve3dcbkk"/><path class="horqyhbht"/><g class="mnm0pp_et"><path class="iq8ofjb5k"/><path class="nj_h_n1so"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ice-skate"} {...others} />);
}

export default Component;
