import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yp6qz_ktz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yp6qz_ktz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:shield-infinity"} {...others} />);
}

export default Component;
