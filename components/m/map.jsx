import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/him3u7bwy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="him3u7bwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:map"} {...others} />);
}

export default Component;
