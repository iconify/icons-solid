import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vr4tq0brk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vr4tq0brk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:circle-chevron-right-line"} {...others} />);
}

export default Component;
