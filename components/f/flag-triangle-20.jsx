import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ks0oxbcgz.css';
import '../../css/x/xzejhphye.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ks0oxbcgz"/><path class="xzejhphye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flag-triangle-20"} {...others} />);
}

export default Component;
