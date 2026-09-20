import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsx3c6bcc.css';
import '../../css/e/elgr7ftla.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qsx3c6bcc"/><path class="elgr7ftla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:messages-people-user-bubble-circle-bold"} {...others} />);
}

export default Component;
