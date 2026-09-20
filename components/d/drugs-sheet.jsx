import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gbzea05qc.css';
import '../../css/j/jv_jxib6y.css';
import '../../css/y/yy-y09b3u.css';
import '../../css/i/ij3cy0bot.css';
import '../../css/r/r3lvnxd_f.css';
import '../../css/h/hdm5wobrt.css';
import '../../css/z/zmdcs1b8d.css';
import '../../css/c/cyljfx-dj.css';
import '../../css/v/v0szp0b-l.css';
import '../../css/q/quuyisbtq.css';
import '../../css/l/l9r-njbht.css';
import '../../css/u/ugs3fv3da.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gbzea05qc"/><path class="jv_jxib6y"/><path class="yy-y09b3u"/><path class="ij3cy0bot"/><path class="r3lvnxd_f"/><path class="hdm5wobrt"/><path class="zmdcs1b8d"/><path class="cyljfx-dj"/><path class="v0szp0b-l"/><path class="quuyisbtq"/><path class="l9r-njbht"/><path class="ugs3fv3da"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:drugs-sheet"} {...others} />);
}

export default Component;
