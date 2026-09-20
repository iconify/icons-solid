import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gd4oy6b3s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gd4oy6b3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:move-2"} {...others} />);
}

export default Component;
