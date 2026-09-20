import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vjtq32brs.css';
import '../../css/l/lcmxysb4l.css';
import '../../css/b/bx1scobhd.css';
import '../../css/k/kkx356e5y.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vjtq32brs"/><path clip-rule="evenodd" class="lcmxysb4l"/><path clip-rule="evenodd" class="bx1scobhd"/><path clip-rule="evenodd" class="kkx356e5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:ios-ipados-flat"} {...others} />);
}

export default Component;
