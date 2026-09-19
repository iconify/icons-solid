import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp1z_cgza.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="fp1z_cgza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-regular:calendar-alt"} {...others} />);
}

export default Component;
