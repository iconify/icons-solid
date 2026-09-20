import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/og_f3_bmu.css';
import '../../css/w/waab1-svo.css';
import '../../css/e/e-s8zybio.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="og_f3_bmu"/><path class="waab1-svo"/><path class="e-s8zybio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-points-light"} {...others} />);
}

export default Component;
