import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wl8q1nb4n.css';
import '../../css/l/l5kfglbol.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wl8q1nb4n"/><path class="l5kfglbol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrows-vertical-20"} {...others} />);
}

export default Component;
