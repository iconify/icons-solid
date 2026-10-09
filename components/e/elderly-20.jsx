import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5i58z2mb.css';
import '../../css/m/mi4i07bgh.css';
import '../../css/j/jat07cb-u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d5i58z2mb"/><path class="mi4i07bgh"/><path class="jat07cb-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:elderly-20"} {...others} />);
}

export default Component;
