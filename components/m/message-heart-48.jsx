import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyrurpboo.css';
import '../../css/w/whmprw8rc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dyrurpboo"/><path class="whmprw8rc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:message-heart-48"} {...others} />);
}

export default Component;
