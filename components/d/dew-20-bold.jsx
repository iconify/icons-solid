import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6or-r9if.css';
import '../../css/g/ggfao8bos.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p6or-r9if"/><path class="ggfao8bos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dew-20-bold"} {...others} />);
}

export default Component;
