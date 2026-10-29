import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rkfpx0b_i.css';
import '../../css/f/f86q_5yiw.css';
import '../../css/e/emha3wbqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="rkfpx0b_i"/><path class="f86q_5yiw wm-s"/><path class="emha3wbqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-plus-duo"} {...others} />);
}

export default Component;
