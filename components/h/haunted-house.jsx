import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/js3__ppmf.css';
import '../../css/o/oxdq44bla.css';
import '../../css/h/h2bja5bww.css';
import '../../css/v/v5oh100wx.css';
import '../../css/j/jnla9ehtl.css';
import '../../css/t/tv5p1omqf.css';
import '../../css/l/l52nfjbqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="js3__ppmf wm-shadow"/><path class="oxdq44bla"/><path class="h2bja5bww"/><path class="v5oh100wx"/><path class="jnla9ehtl"/><path class="tv5p1omqf wm-s"/><path class="l52nfjbqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:haunted-house"} {...others} />);
}

export default Component;
