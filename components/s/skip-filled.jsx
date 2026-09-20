import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5z-5bcwu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h5z-5bcwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:skip-filled"} {...others} />);
}

export default Component;
