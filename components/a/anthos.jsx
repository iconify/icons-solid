import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e88j4obis.css';
import '../../css/s/ssrs1t0fy.css';
import '../../css/e/ezjwoqeev.css';
import '../../css/z/zsi24acex.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e88j4obis"/><path class="ssrs1t0fy"/><path class="ezjwoqeev"/><path class="zsi24acex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:anthos"} {...others} />);
}

export default Component;
