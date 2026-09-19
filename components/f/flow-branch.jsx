import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-0orrhmh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j-0orrhmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:flow-branch"} {...others} />);
}

export default Component;
