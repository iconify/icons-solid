import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/emha3wbqe.css';
import '../../css/p/p65k-7b9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="emha3wbqe"/><path class="p65k-7b9s wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-x"} {...others} />);
}

export default Component;
