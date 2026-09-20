import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwwsb4kdp.css';
import '../../css/y/ylvsggrtp.css';
import '../../css/m/mj3qn8bcu.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="lwwsb4kdp"/><path class="ylvsggrtp"/><path class="mj3qn8bcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mitmproxy"} {...others} />);
}

export default Component;
