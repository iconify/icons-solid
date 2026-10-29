import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/oefba7bzj.css';
import '../../css/v/v7nunhbxc.css';
import '../../css/q/qmauy_88m.css';
import '../../css/t/twnd-y5gp.css';
import '../../css/u/u64ok_brc.css';
import '../../css/t/tyjx_o9ao.css';
import '../../css/w/wirrkmbsq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="oefba7bzj wm-deco"/><path class="v7nunhbxc wm-deco"/><path class="qmauy_88m wm-deco"/><path class="twnd-y5gp wm-k"/><path class="u64ok_brc wm-a"/><path class="tyjx_o9ao wm-k"/><path class="wirrkmbsq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:motorcycle-blueprint"} {...others} />);
}

export default Component;
