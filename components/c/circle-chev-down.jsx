import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0y2p2isn.css';
import '../../css/p/pr22v0bjn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q0y2p2isn"/><path class="pr22v0bjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:circle-chev-down"} {...others} />);
}

export default Component;
