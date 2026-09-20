import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yz9__bc6c.css';
import '../../css/x/xuabsbc5q.css';
import '../../css/i/in-q1r46k.css';
import '../../css/y/yn2cyvv6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yz9__bc6c"/><path class="xuabsbc5q"/><path class="in-q1r46k"/><path class="yn2cyvv6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:swimming-broken"} {...others} />);
}

export default Component;
