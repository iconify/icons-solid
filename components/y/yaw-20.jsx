import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oywa71ble.css';
import '../../css/v/vf-xpzeqo.css';
import '../../css/k/ko9sw4b7p.css';
import '../../css/t/tnrvi8b7v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oywa71ble"/><path class="vf-xpzeqo"/><path class="ko9sw4b7p"/><path class="tnrvi8b7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:yaw-20"} {...others} />);
}

export default Component;
