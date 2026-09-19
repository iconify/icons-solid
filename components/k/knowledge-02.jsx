import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y0ow5dbmw.css';
import '../../css/z/zrhbv_1yw.css';
import '../../css/h/hnn5ic30w.css';
import '../../css/q/q95ed7l1b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y0ow5dbmw"/><path class="zrhbv_1yw"/><path class="hnn5ic30w"/><path class="q95ed7l1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:knowledge-02"} {...others} />);
}

export default Component;
