import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ala7sfbdm.css';
import '../../css/t/tl7j9h2ao.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ala7sfbdm"/><path class="tl7j9h2ao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rain-gauge-20-bold"} {...others} />);
}

export default Component;
