import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8tbbbvzb.css';
import '../../css/v/vanfr9l2e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q8tbbbvzb"/><path class="vanfr9l2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:watch-20-bold"} {...others} />);
}

export default Component;
