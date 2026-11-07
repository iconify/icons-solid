import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_z3u7nyx.css';
import '../../css/w/whtgogiyj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p_z3u7nyx"/><path class="whtgogiyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:brackets-bold"} {...others} />);
}

export default Component;
