import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu1egz7of.css';
import '../../css/q/qtcpzxb0n.css';
import '../../css/w/w4qkzcb1e.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="xu1egz7of"/><path class="qtcpzxb0n"/><path class="w4qkzcb1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:liechtenstein"} {...others} />);
}

export default Component;
