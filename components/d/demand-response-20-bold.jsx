import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtrypjbye.css';
import '../../css/d/dmyxypbyy.css';
import '../../css/b/bc7iv7cyj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vtrypjbye"/><path class="dmyxypbyy"/><path class="bc7iv7cyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:demand-response-20-bold"} {...others} />);
}

export default Component;
