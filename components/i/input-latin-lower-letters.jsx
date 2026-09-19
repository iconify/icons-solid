import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tk_tm6ard.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="tk_tm6ard"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:input-latin-lower-letters"} {...others} />);
}

export default Component;
