import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6f4sq5sg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e6f4sq5sg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rocket-chat"} {...others} />);
}

export default Component;
