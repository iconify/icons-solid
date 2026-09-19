import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u-3e0irwq.css';
import '../../css/u/ub1f79cjh.css';
import '../../css/r/r6wfj1bre.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u-3e0irwq"/><path class="ub1f79cjh"/><path class="r6wfj1bre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:meeting-room"} {...others} />);
}

export default Component;
