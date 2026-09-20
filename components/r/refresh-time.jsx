import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0dufdczv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w0dufdczv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:refresh-time"} {...others} />);
}

export default Component;
