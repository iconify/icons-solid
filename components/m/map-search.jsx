import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f3_x__w1q.css';
import '../../css/r/rgzwgmtyr.css';
import '../../css/v/vtv2khrfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f3_x__w1q"/><path class="rgzwgmtyr"/><path class="vtv2khrfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:map-search"} {...others} />);
}

export default Component;
