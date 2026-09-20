import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp0lh4b9h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xp0lh4b9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:certificate-success-filled"} {...others} />);
}

export default Component;
