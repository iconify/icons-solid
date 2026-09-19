import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dj67aulkh.css';
import '../../css/v/vnp1-m4if.css';
import '../../css/p/pget4blue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dj67aulkh"/><path class="vnp1-m4if"/><path class="pget4blue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:no-smoking"} {...others} />);
}

export default Component;
