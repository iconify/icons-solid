import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm1m7zb1u.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="wm1m7zb1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:briefcasethree"} {...others} />);
}

export default Component;
