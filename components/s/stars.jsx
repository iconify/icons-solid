import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hsol5p2kz.css';
import '../../css/j/jy-0clbhq.css';
import '../../css/v/vlv50fa1h.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><path class="hsol5p2kz"/><path class="jy-0clbhq"/><path class="vlv50fa1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:stars"} {...others} />);
}

export default Component;
