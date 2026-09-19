import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rx5m3bx-a.css';
import '../../css/j/javko1wll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="rx5m3bx-a"/><path class="javko1wll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:calendar"} {...others} />);
}

export default Component;
