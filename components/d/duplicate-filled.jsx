import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtee50-8v.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="vtee50-8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:duplicate-filled"} {...others} />);
}

export default Component;
