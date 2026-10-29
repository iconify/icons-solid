import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lddmgo-gn.css';
import '../../css/o/oau71v5gv.css';
import '../../css/v/vil974bfw.css';
import '../../css/q/qtzejn0du.css';
import '../../css/w/wvrx-o0ly.css';
import '../../css/b/bp3cg3bxv.css';
import '../../css/t/tglv87czs.css';
import '../../css/d/dzzppmbuw.css';
import '../../css/q/qupn7pgpu.css';
import '../../css/r/rehxt93vs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lddmgo-gn wm-shadow"/><path class="oau71v5gv wm-shadow"/><path class="vil974bfw"/><path class="qtzejn0du"/><path class="wvrx-o0ly"/><path class="bp3cg3bxv"/><path class="tglv87czs"/><path class="dzzppmbuw wm-shine"/><path class="qupn7pgpu wm-shine"/><path class="rehxt93vs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:list-checks"} {...others} />);
}

export default Component;
