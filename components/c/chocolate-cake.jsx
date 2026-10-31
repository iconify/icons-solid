import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnstw6bce.css';
import '../../css/e/ee265izoj.css';
import '../../css/q/qs3orrb8v.css';
import '../../css/f/fjhkzub_t.css';
import '../../css/k/ku-4-bbjv.css';
import '../../css/a/aye4iw1sh.css';
import '../../css/w/wtzoqhbyb.css';
import '../../css/i/i9xa69b3b.css';
import '../../css/j/jmyhlwb6y.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="tnstw6bce"/><path class="ee265izoj"/><path class="qs3orrb8v"/><path class="fjhkzub_t"/><path class="ku-4-bbjv"/><path class="aye4iw1sh"/><path class="wtzoqhbyb"/><path class="i9xa69b3b"/><path class="jmyhlwb6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:chocolate-cake"} {...others} />);
}

export default Component;
