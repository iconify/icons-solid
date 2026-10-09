import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n83w2qbdq.css';
import '../../css/u/um-eanbbz.css';
import '../../css/k/k3w3y09sg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n83w2qbdq"/><path class="um-eanbbz"/><path class="k3w3y09sg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:beach-hut-20"} {...others} />);
}

export default Component;
