import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jr5dvv4wi.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jr5dvv4wi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pixel-bell"} {...others} />);
}

export default Component;
