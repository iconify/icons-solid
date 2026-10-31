import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/krlh6j1hj.css';
import '../../css/t/tqzhyga4l.css';
import '../../css/v/vj3t1rb3g.css';
import '../../css/r/rf21f2cfg.css';
import '../../css/b/bgtpok-6s.css';
import '../../css/o/o6yua539q.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="krlh6j1hj wm-shadow"/><path class="tqzhyga4l"/><path class="vj3t1rb3g"/><path class="rf21f2cfg"/><path class="bgtpok-6s"/><path class="o6yua539q"/><path class="v0eyaibau wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:calendar-off"} {...others} />);
}

export default Component;
