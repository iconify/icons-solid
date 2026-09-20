import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd6aqd9fc.css';
import '../../css/t/t0wm04bvd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nd6aqd9fc"/><path class="t0wm04bvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-trophy"} {...others} />);
}

export default Component;
