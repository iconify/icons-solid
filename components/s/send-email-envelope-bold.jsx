import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rrb8-hcea.css';
import '../../css/i/i46axmbny.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rrb8-hcea"/><path class="i46axmbny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:send-email-envelope-bold"} {...others} />);
}

export default Component;
