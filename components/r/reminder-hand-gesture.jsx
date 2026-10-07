import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vo6f34bpk.css';
import '../../css/c/cf4s91bub.css';
import '../../css/r/r51-_908r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vo6f34bpk"/><path class="cf4s91bub"/><path class="r51-_908r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:reminder-hand-gesture"} {...others} />);
}

export default Component;
