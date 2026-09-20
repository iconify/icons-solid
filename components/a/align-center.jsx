import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yj_3fib4v.css';
import '../../css/e/ejq5akbzz.css';
import '../../css/q/qong8cbyf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yj_3fib4v"/><path class="ejq5akbzz"/><path class="qong8cbyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:align-center"} {...others} />);
}

export default Component;
