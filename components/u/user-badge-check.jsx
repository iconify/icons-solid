import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pva9lf95q.css';
import '../../css/j/jwvtersej.css';
import '../../css/q/ql59r0c_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pva9lf95q"/><path class="jwvtersej"/><path class="ql59r0c_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:user-badge-check"} {...others} />);
}

export default Component;
