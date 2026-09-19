import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bszj431is.css';
import '../../css/s/st2v-vblh.css';
import '../../css/l/lfk3ytbtu.css';
import '../../css/r/rphlimb5e.css';
import '../../css/m/mcz9ghbyd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bszj431is"/><path class="st2v-vblh"/><path class="lfk3ytbtu"/><path class="rphlimb5e"/><path class="mcz9ghbyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ev-charging"} {...others} />);
}

export default Component;
