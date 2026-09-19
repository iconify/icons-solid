import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3tnoebhe.css';

const viewBox = {"width":256,"height":432};
const content = `<path class="n3tnoebhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:hourglass-alt"} {...others} />);
}

export default Component;
