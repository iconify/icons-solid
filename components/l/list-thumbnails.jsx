import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kp7tpbbqm.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="kp7tpbbqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:list-thumbnails"} {...others} />);
}

export default Component;
