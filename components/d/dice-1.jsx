import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oy-pxnb-v.css';
import '../../css/r/rgeccubmm.css';
import '../../css/h/hn83h6nze.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="oy-pxnb-v"/><path class="rgeccubmm"/><path class="hn83h6nze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:dice-1"} {...others} />);
}

export default Component;
