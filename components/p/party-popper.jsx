import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kixvnuqbl.css';
import '../../css/p/prw5nccrx.css';
import '../../css/j/ju2twb70o.css';
import '../../css/x/x0byxp9ce.css';
import '../../css/d/dykk2dbfx.css';
import '../../css/l/l1r2jacpd.css';
import '../../css/a/ac5hxre6w.css';
import '../../css/h/hf322vbqn.css';
import '../../css/z/zobe5ibsv.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/r/raag7jlvq.css';
import '../../css/d/dsu6bubuo.css';
import '../../css/s/sac7_sflg.css';
import '../../css/i/ieqr1sbuf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="kixvnuqbl"/><path class="prw5nccrx"/><path class="ju2twb70o"/><path class="x0byxp9ce"/><path class="dykk2dbfx"/><path class="l1r2jacpd"/><ellipse class="ac5hxre6w"/><ellipse class="hf322vbqn"/><ellipse class="zobe5ibsv"/><g class="ij2x_72vy"><path class="raag7jlvq"/><path class="dsu6bubuo"/><path class="sac7_sflg"/><path class="ieqr1sbuf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:party-popper"} {...others} />);
}

export default Component;
