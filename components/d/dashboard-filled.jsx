import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0f9fm8gg.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="m0f9fm8gg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:dashboard-filled"} {...others} />);
}

export default Component;
