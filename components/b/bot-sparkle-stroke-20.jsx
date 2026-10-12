import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqyl277ii.css';
import '../../css/m/mczjewvdv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qqyl277ii"/><path class="mczjewvdv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:bot-sparkle-stroke-20"} {...others} />);
}

export default Component;
