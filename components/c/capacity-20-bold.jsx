import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wiabdabxj.css';
import '../../css/z/z_3gq8xqn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wiabdabxj"/><path class="z_3gq8xqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:capacity-20-bold"} {...others} />);
}

export default Component;
