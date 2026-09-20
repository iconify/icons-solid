import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-83soh2y.css';
import '../../css/x/xjfc-xbtr.css';
import '../../css/n/n115xkb8x.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="x-83soh2y"/><path class="xjfc-xbtr"/><path class="n115xkb8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:sad-face"} {...others} />);
}

export default Component;
