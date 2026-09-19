import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lc7oyuykq.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="lc7oyuykq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:filter-rez-highpass"} {...others} />);
}

export default Component;
