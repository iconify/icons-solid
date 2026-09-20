import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkc4x7rmc.css';
import '../../css/j/j5ymz25ec.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="hkc4x7rmc"/><path class="j5ymz25ec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:contact-solid"} {...others} />);
}

export default Component;
