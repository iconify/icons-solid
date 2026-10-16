import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqd7lbb8y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vqd7lbb8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloud-sun-rain-48-bold"} {...others} />);
}

export default Component;
