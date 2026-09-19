import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ee-uncc2s.css';
import '../../css/z/z33pz2bcc.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ee-uncc2s"/><path class="z33pz2bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:fiber"} {...others} />);
}

export default Component;
