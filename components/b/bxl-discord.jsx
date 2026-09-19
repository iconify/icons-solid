import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cygiloihl.css';
import '../../css/w/wc2xakonk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cygiloihl"/><path class="wc2xakonk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-discord"} {...others} />);
}

export default Component;
