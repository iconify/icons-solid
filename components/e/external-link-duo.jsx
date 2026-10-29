import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s0s9ztoap.css';
import '../../css/h/h7btge1_e.css';
import '../../css/v/vanl12bnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="s0s9ztoap"/><path class="h7btge1_e wm-a"/><path class="vanl12bnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:external-link-duo"} {...others} />);
}

export default Component;
