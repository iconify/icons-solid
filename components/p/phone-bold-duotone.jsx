import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnl-77aoj.css';
import '../../css/w/wsnzclbee.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qnl-77aoj"/><path class="wsnzclbee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:phone-bold-duotone"} {...others} />);
}

export default Component;
