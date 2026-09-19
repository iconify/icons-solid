import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yc61ku0nq.css';

const viewBox = {"width":256,"height":432};
const content = `<path class="yc61ku0nq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:hourglass-outline"} {...others} />);
}

export default Component;
