import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oorqf-8pe.css';
import '../../css/y/yvm9oub2m.css';
import '../../css/h/hvy9vrb1o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oorqf-8pe"/><path class="yvm9oub2m"/><path class="hvy9vrb1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:speedometer-20-bold"} {...others} />);
}

export default Component;
