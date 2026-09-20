import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6vs_fb3e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x6vs_fb3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:world-1"} {...others} />);
}

export default Component;
