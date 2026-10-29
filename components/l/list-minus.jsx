import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yl7a92tqe.css';
import '../../css/o/okp7pp4nk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yl7a92tqe"/><path class="okp7pp4nk wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-minus"} {...others} />);
}

export default Component;
