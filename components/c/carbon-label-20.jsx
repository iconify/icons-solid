import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i49h8ss5i.css';
import '../../css/j/jvv5eu4ka.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i49h8ss5i"/><path class="jvv5eu4ka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-label-20"} {...others} />);
}

export default Component;
