import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bbegpb7cr.css';
import '../../css/o/o4x2yobuv.css';
import '../../css/r/r4ary7akk.css';
import '../../css/c/c-f9i8cyo.css';
import '../../css/k/kpys32bbt.css';
import '../../css/v/vuc-uestr.css';
import '../../css/y/y7y3llbpg.css';
import '../../css/a/ai9y6wx9x.css';
import '../../css/m/mc20z2bjk.css';
import '../../css/r/rybwmsb5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bbegpb7cr"/><path class="o4x2yobuv"/><path class="r4ary7akk"/><path class="c-f9i8cyo"/><path class="kpys32bbt"/><path class="vuc-uestr"/><path class="y7y3llbpg"/><path class="ai9y6wx9x"/><path class="mc20z2bjk"/><path class="rybwmsb5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-play-vertical-bold-duotone"} {...others} />);
}

export default Component;
