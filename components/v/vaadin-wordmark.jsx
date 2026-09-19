import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qwqxb2ble.css';
import '../../css/d/dibzppbzl.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="qwqxb2ble"/><path class="dibzppbzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:vaadin-wordmark"} {...others} />);
}

export default Component;
