import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qk4zrqh7w.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qk4zrqh7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:robot-outline"} {...others} />);
}

export default Component;
