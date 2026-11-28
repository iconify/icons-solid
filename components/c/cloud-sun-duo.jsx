import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9mwjd2si.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vti9_99oi.css';
import '../../css/z/z22za_s7e.css';
import '../../css/e/ew760_wtm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s9mwjd2si secondary"/><g class="dt0cm9dhy primary"><path class="vti9_99oi"/><path class="z22za_s7e"/><path class="ew760_wtm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cloud-sun-duo"} {...others} />);
}

export default Component;
