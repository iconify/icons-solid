import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qhyahrbhr.css';
import '../../css/z/zh1f6hv8z.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="qhyahrbhr"/><path clip-rule="evenodd" class="zh1f6hv8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:square-cap-flat"} {...others} />);
}

export default Component;
