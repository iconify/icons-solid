import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tl75yhb6l.css';
import '../../css/u/uqpad_ykf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tl75yhb6l"/><path class="uqpad_ykf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:workflow-20"} {...others} />);
}

export default Component;
