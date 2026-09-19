import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqd-lj30l.css';

const viewBox = {"width":304,"height":512};
const content = `<path class="uqd-lj30l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:boiled-egg"} {...others} />);
}

export default Component;
