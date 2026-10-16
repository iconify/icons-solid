import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbdwctb6r.css';
import '../../css/w/w2y26nmkr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cbdwctb6r"/><path class="w2y26nmkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:disconnector-20-bold"} {...others} />);
}

export default Component;
