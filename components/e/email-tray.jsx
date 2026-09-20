import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tunre70_k.css';
import '../../css/f/f_afl5b6k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tunre70_k"/><path class="f_afl5b6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:email-tray"} {...others} />);
}

export default Component;
