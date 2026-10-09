import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hm0dtlbqb.css';
import '../../css/w/w8d7b6b8r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hm0dtlbqb"/><path class="w8d7b6b8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:truck-20"} {...others} />);
}

export default Component;
