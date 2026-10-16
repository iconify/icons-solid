import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/orlk51biu.css';
import '../../css/t/tjdhhwbtf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="orlk51biu"/><path class="tjdhhwbtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:black-start-20"} {...others} />);
}

export default Component;
