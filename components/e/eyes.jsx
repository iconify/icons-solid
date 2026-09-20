import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sm2n6q3lf.css';
import '../../css/x/xdepcd09o.css';
import '../../css/h/httkegbgj.css';
import '../../css/z/ze22vvbvt.css';
import '../../css/c/cx9fnxbqc.css';
import '../../css/w/w04zi0blq.css';
import '../../css/j/j-cwkltol.css';
import '../../css/r/rsf33p44w.css';
import '../../css/r/rey32xb7e.css';
import '../../css/f/faw3gcbwg.css';
import '../../css/l/lth_ycs5c.css';
import '../../css/j/j-gq87j5l.css';
import '../../css/u/ugx4bebbb.css';
import '../../css/v/vnqpysm8z.css';
import '../../css/x/xc7w04biv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sm2n6q3lf"/><path class="xdepcd09o"/><path class="httkegbgj"/><path class="ze22vvbvt"/><path class="cx9fnxbqc"/><path class="w04zi0blq"/><path class="j-cwkltol"/><path class="rsf33p44w"/><path class="rey32xb7e"/><path class="faw3gcbwg"/><path class="lth_ycs5c"/><path class="j-gq87j5l"/><path class="ugx4bebbb"/><path class="vnqpysm8z"/><path class="xc7w04biv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:eyes"} {...others} />);
}

export default Component;
