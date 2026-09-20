import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p92dqpbur.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p92dqpbur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:exclamation-16"} {...others} />);
}

export default Component;
