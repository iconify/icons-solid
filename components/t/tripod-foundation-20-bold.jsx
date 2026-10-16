import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vk81lsb-f.css';
import '../../css/v/vmw5ydxzv.css';
import '../../css/t/ta92rdbgt.css';
import '../../css/q/qiqf2wm_a.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vk81lsb-f"/><path class="vmw5ydxzv"/><path class="ta92rdbgt"/><path class="qiqf2wm_a"/><path class="yfoxxnbix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tripod-foundation-20-bold"} {...others} />);
}

export default Component;
