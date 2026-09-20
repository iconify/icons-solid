import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qu3x4jbmc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qu3x4jbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:utensil-spoon-solid"} {...others} />);
}

export default Component;
