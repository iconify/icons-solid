import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt7p-sbze.css';
import '../../css/c/che6a8lpe.css';
import '../../css/m/m4zyd4bvw.css';
import '../../css/o/o5qer32ra.css';
import '../../css/t/t9v-ybplu.css';
import '../../css/l/l6epsvbff.css';
import '../../css/c/cil1kpbfx.css';
import '../../css/e/e8j463bif.css';
import '../../css/m/mg7fz6b2e.css';
import '../../css/z/zw9o-ebed.css';
import '../../css/p/p-o75ebib.css';
import '../../css/f/ft_yacl3r.css';
import '../../css/n/ndgqf_b0w.css';
import '../../css/f/f0plcccgf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dt7p-sbze"/><path class="che6a8lpe"/><path class="m4zyd4bvw"/><path class="o5qer32ra"/><path class="t9v-ybplu"/><path class="l6epsvbff"/><path class="cil1kpbfx"/><path class="e8j463bif"/><path class="mg7fz6b2e"/><path class="zw9o-ebed"/><path class="p-o75ebib"/><path class="ft_yacl3r"/><path class="ndgqf_b0w"/><path class="f0plcccgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:oncomingtaxi"} {...others} />);
}

export default Component;
