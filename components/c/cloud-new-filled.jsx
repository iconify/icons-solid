import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/et1iyenmo.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="et1iyenmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:cloud-new-filled"} {...others} />);
}

export default Component;
