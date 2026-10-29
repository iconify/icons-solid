import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s2gz3nbuh.css';
import '../../css/h/h-upcp83y.css';
import '../../css/t/tf9_0-uqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="s2gz3nbuh"/><path class="h-upcp83y wm-a"/><path class="tf9_0-uqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hexagon-duo"} {...others} />);
}

export default Component;
