import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ys2xnwm9y.css';
import '../../css/c/cc8xe5byi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ys2xnwm9y"/><path class="cc8xe5byi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:bear-line"} {...others} />);
}

export default Component;
