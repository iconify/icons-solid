import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjozgk1xh.css';
import '../../css/v/vfyr6kgzz.css';
import '../../css/w/w-aohegfl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cjozgk1xh"/><path class="vfyr6kgzz"/><path class="w-aohegfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stadium-20-bold"} {...others} />);
}

export default Component;
