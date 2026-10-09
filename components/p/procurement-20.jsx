import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvm_9zb2m.css';
import '../../css/w/wx5f8bcnt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jvm_9zb2m"/><path class="wx5f8bcnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:procurement-20"} {...others} />);
}

export default Component;
