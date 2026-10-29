import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m-zgutb9k.css';
import '../../css/f/f545reb7b.css';
import '../../css/w/wevkxlbtt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m-zgutb9k"/><path class="f545reb7b wm-a"/><path class="wevkxlbtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:baguette-duo"} {...others} />);
}

export default Component;
