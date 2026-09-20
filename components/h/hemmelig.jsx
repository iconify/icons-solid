import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5r_j7wyr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e5r_j7wyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hemmelig"} {...others} />);
}

export default Component;
