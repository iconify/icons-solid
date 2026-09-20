import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ujo66obxz.css';
import '../../css/q/q4yf1rbfs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ujo66obxz"/><path class="q4yf1rbfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:tab-external-16"} {...others} />);
}

export default Component;
