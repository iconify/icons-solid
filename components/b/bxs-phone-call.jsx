import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htdpczpdl.css';
import '../../css/w/waf8_fo8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="htdpczpdl"/><path class="waf8_fo8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-phone-call"} {...others} />);
}

export default Component;
