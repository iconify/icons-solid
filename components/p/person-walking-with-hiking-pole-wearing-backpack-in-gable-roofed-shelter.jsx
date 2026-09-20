import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ez8rbaciu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ez8rbaciu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-walking-with-hiking-pole-wearing-backpack-in-gable-roofed-shelter"} {...others} />);
}

export default Component;
