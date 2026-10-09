import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hm0dtlbqb.css';
import '../../css/k/ko9a2zbln.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hm0dtlbqb"/><path class="ko9a2zbln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-truck-20"} {...others} />);
}

export default Component;
