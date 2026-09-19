import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmi81oi2i.css';

const viewBox = {"width":240,"height":480};
const content = `<path class="jmi81oi2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:attachment-alt"} {...others} />);
}

export default Component;
