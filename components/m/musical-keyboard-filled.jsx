import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/th-w9lb9o.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="th-w9lb9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:musical-keyboard-filled"} {...others} />);
}

export default Component;
