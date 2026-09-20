import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8wgp4bha.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t8wgp4bha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:send-right-filled"} {...others} />);
}

export default Component;
