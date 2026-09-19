import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/anhxi-3cu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="anhxi-3cu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:flow-parallel"} {...others} />);
}

export default Component;
