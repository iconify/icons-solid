import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0oa-qzdz.css';
import '../../css/a/a2wqv6phc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c0oa-qzdz"/><path class="a2wqv6phc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:robot-vacuum-20-bold"} {...others} />);
}

export default Component;
