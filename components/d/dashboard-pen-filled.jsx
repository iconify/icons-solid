import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di7hah0nb.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="di7hah0nb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:dashboard-pen-filled"} {...others} />);
}

export default Component;
