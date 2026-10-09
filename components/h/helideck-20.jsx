import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nygqmabbq.css';
import '../../css/i/iwdb11t7s.css';
import '../../css/l/l7sdbnbma.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nygqmabbq"/><path class="iwdb11t7s"/><path class="l7sdbnbma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:helideck-20"} {...others} />);
}

export default Component;
