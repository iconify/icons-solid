import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_9mhsbey.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="h_9mhsbey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:zoo-15"} {...others} />);
}

export default Component;
