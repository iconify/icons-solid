import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wln1wzvwu.css';
import '../../css/w/w922bmbpr.css';
import '../../css/s/sxrrkcbfz.css';
import '../../css/j/jkqmscctt.css';
import '../../css/j/js90i1apb.css';
import '../../css/g/g112febve.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wln1wzvwu"/><path class="w922bmbpr"/><path class="sxrrkcbfz"/><path class="jkqmscctt"/><path class="js90i1apb"/><path class="g112febve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:assured-workloads"} {...others} />);
}

export default Component;
