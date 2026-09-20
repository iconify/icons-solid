import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yb4hln.css';
import '../../css/d/d-d0cg1x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yb4hln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:pause-to-play-transition"} {...others} />);
}

export default Component;
