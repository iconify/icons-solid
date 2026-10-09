import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxvl6gbzy.css';
import '../../css/i/i-5u2oj8j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wxvl6gbzy"/><path class="i-5u2oj8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:move-vertical-20"} {...others} />);
}

export default Component;
