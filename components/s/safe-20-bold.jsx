import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_-74wdkk.css';
import '../../css/a/a5lgi4lwe.css';
import '../../css/t/t15dg5mzj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g_-74wdkk"/><path class="a5lgi4lwe"/><path class="t15dg5mzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:safe-20-bold"} {...others} />);
}

export default Component;
