import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odgb6sblx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="odgb6sblx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:eye-cancelled-filled"} {...others} />);
}

export default Component;
