import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pi6j8fbyn.css';
import '../../css/z/zdodfpb-u.css';
import '../../css/r/r90ulhg7s.css';
import '../../css/r/r0i5eubba.css';
import '../../css/h/hrbh0mbeo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="pi6j8fbyn wm-shadow"/><path class="zdodfpb-u"/><path class="r90ulhg7s"/><path class="r0i5eubba"/><path class="hrbh0mbeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:wifi"} {...others} />);
}

export default Component;
