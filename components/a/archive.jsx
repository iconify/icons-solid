import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/k9f8q7bhr.css';
import '../../css/m/mmwpt_bdl.css';
import '../../css/k/ku7itzbqh.css';
import '../../css/n/naopa9blk.css';
import '../../css/p/p37n0ibjs.css';
import '../../css/r/ro0n50j-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="k9f8q7bhr wm-shadow"/><path class="mmwpt_bdl"/><path class="ku7itzbqh"/><path class="naopa9blk"/><path class="p37n0ibjs wm-shine"/><path class="ro0n50j-h wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:archive"} {...others} />);
}

export default Component;
