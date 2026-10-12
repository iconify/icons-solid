import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9astq9iv.css';
import '../../css/t/ts6ghieqe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c9astq9iv"/><path class="ts6ghieqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kick-scooter-20-bold"} {...others} />);
}

export default Component;
