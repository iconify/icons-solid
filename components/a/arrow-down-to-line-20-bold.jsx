import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir4g1b6-s.css';
import '../../css/w/w0_dqt_cb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ir4g1b6-s"/><path class="w0_dqt_cb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-down-to-line-20-bold"} {...others} />);
}

export default Component;
