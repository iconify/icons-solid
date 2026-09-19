import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i37phhb_v.css';
import '../../css/u/uw6sq-v3i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i37phhb_v"/><path class="uw6sq-v3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-paint-roll"} {...others} />);
}

export default Component;
