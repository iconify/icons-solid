import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ri3k7ob7e.css';
import '../../css/a/a-4s07bqr.css';
import '../../css/b/bxzxb8v8d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ri3k7ob7e"/><path class="a-4s07bqr"/><path class="bxzxb8v8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-alert-48"} {...others} />);
}

export default Component;
