import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5dad0fgl.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="g5dad0fgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:jp-fire-station"} {...others} />);
}

export default Component;
