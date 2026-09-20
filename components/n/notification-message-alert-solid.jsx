import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrj_-3b2y.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="qrj_-3b2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:notification-message-alert-solid"} {...others} />);
}

export default Component;
