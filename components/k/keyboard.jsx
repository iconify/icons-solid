import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lqyk13b1v.css';
import '../../css/d/d3p-lq76v.css';
import '../../css/q/qwd4hbbeu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="lqyk13b1v"/><path class="d3p-lq76v"/><path class="qwd4hbbeu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:keyboard"} {...others} />);
}

export default Component;
