import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivz70yb3n.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="ivz70yb3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:boomerang"} {...others} />);
}

export default Component;
