import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9s4lmbgx.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="r9s4lmbgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:feedback-filled"} {...others} />);
}

export default Component;
