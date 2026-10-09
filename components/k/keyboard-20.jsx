import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5p77gmzy.css';
import '../../css/x/xetxy-b7m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z5p77gmzy"/><path class="xetxy-b7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:keyboard-20"} {...others} />);
}

export default Component;
