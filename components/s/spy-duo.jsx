import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/izzciiowm.css';
import '../../css/i/idy663b5a.css';
import '../../css/z/z54ep9b9t.css';
import '../../css/j/j8sz6hb2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="izzciiowm"/><path class="idy663b5a wm-a"/><path class="z54ep9b9t"/><path class="j8sz6hb2h wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:spy-duo"} {...others} />);
}

export default Component;
