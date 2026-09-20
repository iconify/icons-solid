import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnuav7bqz.css';
import '../../css/h/hq1bfqbrr.css';
import '../../css/d/dqjw9kp6p.css';
import '../../css/r/reiuf7b-d.css';
import '../../css/w/w7l1i_o5b.css';
import '../../css/t/t1xbh6bve.css';
import '../../css/c/cb5dgibyv.css';
import '../../css/j/j-zq03lhj.css';
import '../../css/o/ora517mcv.css';
import '../../css/x/x4iokbb2y.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dnuav7bqz"/><g class="hq1bfqbrr"><path class="dqjw9kp6p"/><path class="reiuf7b-d"/></g><path class="w7l1i_o5b"/><path class="t1xbh6bve"/><path class="cb5dgibyv"/><path class="j-zq03lhj"/><path class="ora517mcv"/><path class="x4iokbb2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-with-veil-light-skin-tone"} {...others} />);
}

export default Component;
