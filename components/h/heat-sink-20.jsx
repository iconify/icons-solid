import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ci9il8bto.css';
import '../../css/n/np35iacps.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ci9il8bto"/><path class="np35iacps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-sink-20"} {...others} />);
}

export default Component;
