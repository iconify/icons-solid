import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhjj3vt3s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hhjj3vt3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:line-dot"} {...others} />);
}

export default Component;
