import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xz1rlxbpz.css';
import '../../css/h/h03p2vbds.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="xz1rlxbpz"/><path clip-rule="evenodd" class="h03p2vbds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:expand-flat"} {...others} />);
}

export default Component;
