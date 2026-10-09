import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hm0dtlbqb.css';
import '../../css/h/hipucnysa.css';
import '../../css/g/gujp9-bxu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hm0dtlbqb"/><path class="hipucnysa"/><path class="gujp9-bxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-truck-20"} {...others} />);
}

export default Component;
