import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wz2j7vb7c.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="wz2j7vb7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:pc-tower-settings-filled"} {...others} />);
}

export default Component;
