import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdl7-9bot.css';
import '../../css/x/xyt0ejbjg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qdl7-9bot"/><path class="xyt0ejbjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-charging-20"} {...others} />);
}

export default Component;
