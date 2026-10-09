import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpuejfbaw.css';
import '../../css/b/b858i5q6u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kpuejfbaw"/><path class="b858i5q6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:magnet-48-bold"} {...others} />);
}

export default Component;
