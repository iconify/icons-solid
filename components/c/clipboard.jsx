import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hxiasq3pp.css';
import '../../css/v/v91ay4sjm.css';
import '../../css/n/n_fk0zbiy.css';
import '../../css/v/vhnp5abdm.css';
import '../../css/u/ux8u0cbdn.css';
import '../../css/k/kc5qe6bmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hxiasq3pp wm-shadow"/><path class="v91ay4sjm"/><path class="n_fk0zbiy"/><path class="vhnp5abdm"/><path class="ux8u0cbdn"/><path class="kc5qe6bmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:clipboard"} {...others} />);
}

export default Component;
