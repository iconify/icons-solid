import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcyh21bht.css';
import '../../css/i/iuy7adb4k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dcyh21bht"/><path class="iuy7adb4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:volume-20"} {...others} />);
}

export default Component;
