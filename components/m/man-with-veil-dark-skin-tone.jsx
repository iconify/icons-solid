import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnuav7bqz.css';
import '../../css/e/e_raf5bng.css';
import '../../css/d/dqjw9kp6p.css';
import '../../css/r/reiuf7b-d.css';
import '../../css/i/ievhk6bcg.css';
import '../../css/t/t1xbh6bve.css';
import '../../css/c/cb5dgibyv.css';
import '../../css/j/j-zq03lhj.css';
import '../../css/o/ora517mcv.css';
import '../../css/x/x4iokbb2y.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dnuav7bqz"/><g class="e_raf5bng"><path class="dqjw9kp6p"/><path class="reiuf7b-d"/></g><path class="ievhk6bcg"/><path class="t1xbh6bve"/><path class="cb5dgibyv"/><path class="j-zq03lhj"/><path class="ora517mcv"/><path class="x4iokbb2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-with-veil-dark-skin-tone"} {...others} />);
}

export default Component;
