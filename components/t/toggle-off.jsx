import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrui74b0l.css';
import '../../css/r/r-3q_9bym.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vrui74b0l"/><path class="r-3q_9bym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:toggle-off"} {...others} />);
}

export default Component;
