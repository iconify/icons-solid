import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xkqyiwblc.css';
import '../../css/q/qaiwx9bis.css';
import '../../css/d/dt10bzeut.css';
import '../../css/e/e5joplaob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="xkqyiwblc"/><path class="qaiwx9bis"/><ellipse class="dt10bzeut"/><path class="e5joplaob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:users-group-rounded-line-duotone"} {...others} />);
}

export default Component;
