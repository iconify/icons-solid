import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eoy6vkbrs.css';
import '../../css/q/qrtxhqwfd.css';
import '../../css/r/r4p2dtbwt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eoy6vkbrs"/><path class="qrtxhqwfd"/><path class="r4p2dtbwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-images"} {...others} />);
}

export default Component;
