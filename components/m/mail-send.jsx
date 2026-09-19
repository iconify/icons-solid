import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8wh6ihst.css';
import '../../css/c/cd1qz4bbk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s8wh6ihst"/><path class="cd1qz4bbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:mail-send"} {...others} />);
}

export default Component;
