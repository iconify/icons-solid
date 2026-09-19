import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfnwxgt6p.css';
import '../../css/c/c9p0p_5vn.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="wfnwxgt6p"/><path class="c9p0p_5vn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:trpc"} {...others} />);
}

export default Component;
