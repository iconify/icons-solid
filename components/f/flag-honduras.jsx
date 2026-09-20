import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/r/rdx83hboy.css';
import '../../css/n/n800bpqqx.css';
import '../../css/g/grlx0kzrz.css';
import '../../css/i/i4pmj4bhw.css';
import '../../css/h/hq3208b_b.css';
import '../../css/i/inv-1bclp.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="rdx83hboy"/><circle class="n800bpqqx"/><circle class="grlx0kzrz"/><circle class="i4pmj4bhw"/><circle class="hq3208b_b"/><circle class="inv-1bclp"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-honduras"} {...others} />);
}

export default Component;
