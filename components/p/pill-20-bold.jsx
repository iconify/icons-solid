import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j66ia2m5n.css';
import '../../css/u/uuavj04rq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j66ia2m5n"/><path class="uuavj04rq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pill-20-bold"} {...others} />);
}

export default Component;
