import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p480i1bck.css';
import '../../css/c/c9n0mybal.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p480i1bck"/><path class="c9n0mybal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ear-defenders-20-bold"} {...others} />);
}

export default Component;
