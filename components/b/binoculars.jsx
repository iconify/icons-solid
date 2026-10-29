import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gaam40bfx.css';
import '../../css/g/gdnuq8wfy.css';
import '../../css/g/g8_iol2hx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gaam40bfx"/><path class="gdnuq8wfy"/><path class="g8_iol2hx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:binoculars"} {...others} />);
}

export default Component;
