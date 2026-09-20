import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vu8jyibot.css';
import '../../css/f/fa7sd-bvi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vu8jyibot"/><path class="fa7sd-bvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:butterfly-2-line"} {...others} />);
}

export default Component;
