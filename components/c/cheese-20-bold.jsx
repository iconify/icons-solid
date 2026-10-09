import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a37an34lq.css';
import '../../css/l/lkqfabbbe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a37an34lq"/><path class="lkqfabbbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cheese-20-bold"} {...others} />);
}

export default Component;
