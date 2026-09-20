import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ct6g40zug.css';
import '../../css/j/j7_supb0q.css';
import '../../css/j/jw8btwb9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ct6g40zug"/><path clip-rule="evenodd" class="j7_supb0q"/><path class="jw8btwb9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pin-school-filled"} {...others} />);
}

export default Component;
