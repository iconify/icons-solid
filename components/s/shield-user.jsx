import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p0g7ffb8z.css';
import '../../css/o/o784y1sot.css';
import '../../css/a/a7r5q1bbk.css';
import '../../css/v/v74ybtbkr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p0g7ffb8z"/><path class="o784y1sot"/><path class="a7r5q1bbk"/><path class="v74ybtbkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shield-user"} {...others} />);
}

export default Component;
