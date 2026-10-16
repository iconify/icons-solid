import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptmrf5_xm.css';
import '../../css/j/j-b6puwvk.css';
import '../../css/j/jeh1gm_0y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ptmrf5_xm"/><path class="j-b6puwvk"/><path class="jeh1gm_0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dial-indicator-20-bold"} {...others} />);
}

export default Component;
