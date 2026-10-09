import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjq_h3bgy.css';
import '../../css/h/h2vk8bchf.css';
import '../../css/m/m88iatbgo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mjq_h3bgy"/><path class="h2vk8bchf"/><path class="m88iatbgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-line-20-bold"} {...others} />);
}

export default Component;
