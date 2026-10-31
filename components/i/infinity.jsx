import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chgd9ravy.css';
import '../../css/t/t9dyi-6vx.css';
import '../../css/a/a1fi6oj5l.css';
import '../../css/v/v6t_mbbgv.css';
import '../../css/u/urarvfbpv.css';
import '../../css/l/ln1ggabvx.css';
import '../../css/x/xct-mibia.css';
import '../../css/x/xplldib1v.css';
import '../../css/q/qn16q-hfs.css';
import '../../css/v/vc2u3obaw.css';
import '../../css/o/odz-4fb7x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="chgd9ravy wm-shadow"/><path class="t9dyi-6vx"/><path class="a1fi6oj5l"/><path class="v6t_mbbgv"/><path class="urarvfbpv"/><path class="ln1ggabvx"/><path class="xct-mibia"/><path class="xplldib1v"/><path class="qn16q-hfs"/><path class="vc2u3obaw wm-shine"/><path class="odz-4fb7x wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:infinity"} {...others} />);
}

export default Component;
