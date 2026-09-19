import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qku5pfb_q.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="qku5pfb_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:arrow-trending-stroke-12"} {...others} />);
}

export default Component;
