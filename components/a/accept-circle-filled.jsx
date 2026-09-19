import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-rn7nb-k.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="y-rn7nb-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:accept-circle-filled"} {...others} />);
}

export default Component;
