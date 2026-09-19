import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pepvs8ble.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="pepvs8ble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:input-latin-capital-letters-filled"} {...others} />);
}

export default Component;
