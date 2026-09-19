import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fiqbokbbo.css';
import '../../css/j/j0ryq4_tz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fiqbokbbo"/><path class="j0ryq4_tz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:help-filled"} {...others} />);
}

export default Component;
