import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ir8o7_mqf.css';
import '../../css/y/y99pxgpge.css';
import '../../css/f/f4317cc7f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ir8o7_mqf"/><path class="y99pxgpge"/><path class="f4317cc7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:gripper"} {...others} />);
}

export default Component;
