import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh5l4yp3u.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rh5l4yp3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:gamma"} {...others} />);
}

export default Component;
