import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jlb-er9ml.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="jlb-er9ml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:drop-of-blood"} {...others} />);
}

export default Component;
