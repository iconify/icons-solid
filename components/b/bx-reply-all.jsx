import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iclyhyb7e.css';
import '../../css/j/jnkd4081l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iclyhyb7e"/><path class="jnkd4081l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-reply-all"} {...others} />);
}

export default Component;
