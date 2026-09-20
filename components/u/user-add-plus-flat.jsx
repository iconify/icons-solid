import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6-q1qa5q.css';
import '../../css/n/npkzd0bom.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="n6-q1qa5q"/><path clip-rule="evenodd" class="npkzd0bom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:user-add-plus-flat"} {...others} />);
}

export default Component;
