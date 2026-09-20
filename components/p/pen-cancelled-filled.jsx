import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m057asb6d.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="m057asb6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:pen-cancelled-filled"} {...others} />);
}

export default Component;
