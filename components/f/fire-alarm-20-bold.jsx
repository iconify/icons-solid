import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpfh3ybpx.css';
import '../../css/m/mc7p0pbek.css';
import '../../css/r/rsgdkwbmp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xpfh3ybpx"/><path class="mc7p0pbek"/><path class="rsgdkwbmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fire-alarm-20-bold"} {...others} />);
}

export default Component;
