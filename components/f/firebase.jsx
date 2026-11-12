import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3ew7caks.css';
import '../../css/h/hrxhp9b1x.css';
import '../../css/q/qp9ttxbyq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e3ew7caks"/><path class="hrxhp9b1x"/><path class="qp9ttxbyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:firebase"} {...others} />);
}

export default Component;
