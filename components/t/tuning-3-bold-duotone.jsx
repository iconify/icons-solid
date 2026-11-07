import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_4tr0b8x.css';
import '../../css/s/slew70bje.css';
import '../../css/v/vbh340hvr.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/m/mwd8db17g.css';
import '../../css/g/gpufsebbg.css';
import '../../css/g/g35hp_odc.css';
import '../../css/k/k2xvk1jdl.css';
import '../../css/b/bitdb8u9p.css';
import '../../css/e/evni7jj1t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u_4tr0b8x"/><path class="slew70bje"/><path class="vbh340hvr"/><g class="xtpeb-edw"><path class="mwd8db17g"/><path class="gpufsebbg"/><path class="g35hp_odc"/><path class="k2xvk1jdl"/><path class="bitdb8u9p"/><path class="evni7jj1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-3-bold-duotone"} {...others} />);
}

export default Component;
