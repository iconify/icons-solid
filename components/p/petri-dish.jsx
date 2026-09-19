import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2k3m0xzf.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="h2k3m0xzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:petri-dish"} {...others} />);
}

export default Component;
