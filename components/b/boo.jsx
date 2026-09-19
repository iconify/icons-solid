import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv82bmbkc.css';
import '../../css/x/xb-3e0r0o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yv82bmbkc"/><path class="xb-3e0r0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:boo"} {...others} />);
}

export default Component;
