import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_bbmbbxq.css';
import '../../css/b/b9xdq3bwo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c_bbmbbxq"/><path class="b9xdq3bwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cable-joint-20"} {...others} />);
}

export default Component;
