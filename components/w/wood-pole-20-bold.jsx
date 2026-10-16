import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnwbcdcds.css';
import '../../css/r/rxia6zz2s.css';
import '../../css/p/pn4l7ibkh.css';
import '../../css/g/g21cvrbjf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qnwbcdcds"/><path class="rxia6zz2s"/><path class="pn4l7ibkh"/><path class="g21cvrbjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wood-pole-20-bold"} {...others} />);
}

export default Component;
