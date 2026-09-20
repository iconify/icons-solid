import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/um8lvbcbw.css';
import '../../css/y/yp8iluy6t.css';
import '../../css/d/dv36xwbcf.css';
import '../../css/x/xvfqsbcod.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="um8lvbcbw"/><path class="yp8iluy6t"/><path class="dv36xwbcf"/><path class="xvfqsbcod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pharmacy"} {...others} />);
}

export default Component;
