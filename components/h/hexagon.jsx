import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uc9bpyb_z.css';

const viewBox = {"width":1024,"height":897};
const content = `<path class="uc9bpyb_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:hexagon"} {...others} />);
}

export default Component;
