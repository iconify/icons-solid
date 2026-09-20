import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3j-ajnsm.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="r3j-ajnsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:transit-vehicle-on-railway-track-in-tunnel"} {...others} />);
}

export default Component;
