import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymduf8c4o.css';
import '../../css/s/s0d42ac3u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ymduf8c4o"/><path class="s0d42ac3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:signpost-48"} {...others} />);
}

export default Component;
