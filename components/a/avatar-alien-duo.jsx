import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/ttsmw7bgp.css';
import '../../css/l/loevbjdhm.css';
import '../../css/s/s1kut8o6j.css';
import '../../css/f/f0xsko-4b.css';
import '../../css/g/guqhbex6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ttsmw7bgp"/><path class="loevbjdhm wm-a"/><path class="s1kut8o6j wm-s"/><path class="f0xsko-4b"/><path class="guqhbex6p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-alien-duo"} {...others} />);
}

export default Component;
