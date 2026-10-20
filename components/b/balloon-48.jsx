import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b76cn79oc.css';
import '../../css/j/j4audb3xv.css';
import '../../css/f/fvcv6nbrs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b76cn79oc"/><path class="j4audb3xv"/><path class="fvcv6nbrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:balloon-48"} {...others} />);
}

export default Component;
