import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7d4ky4we.css';
import '../../css/p/polb77bwu.css';
import '../../css/s/sorlblovj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c7d4ky4we"/><path class="polb77bwu"/><path class="sorlblovj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lathe-20-bold"} {...others} />);
}

export default Component;
