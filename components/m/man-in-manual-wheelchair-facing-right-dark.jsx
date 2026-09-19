import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f5h-hz_pz.css';
import '../../css/j/jj0z1zbdy.css';
import '../../css/x/x8kk6sj6p.css';
import '../../css/m/mlwefwvlt.css';
import '../../css/q/qyvzc5m4y.css';
import '../../css/n/n0cqkc_0i.css';
import '../../css/y/y6olihiob.css';
import '../../css/w/w8uzenyvy.css';
import '../../css/k/kr5ed8blc.css';
import '../../css/k/k-imc5won.css';
import '../../css/s/sk6j96bxz.css';
import '../../css/v/v2c8jgbcu.css';
import '../../css/p/pzd3isbbb.css';
import '../../css/l/lbfs4xt0d.css';
import '../../css/b/baslv7bbj.css';
import '../../css/a/afj03wjfc.css';
import '../../css/g/gamm-6dbx.css';
import '../../css/e/ep7rzrb0n.css';
import '../../css/r/rjv8zrbwa.css';
import '../../css/h/hwcunup3l.css';
import '../../css/q/qgjj_pf0j.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="f5h-hz_pz"/><path class="jj0z1zbdy"/><path class="x8kk6sj6p"/><path class="mlwefwvlt"/><path class="qyvzc5m4y"/><path class="n0cqkc_0i"/><path class="y6olihiob"/><path class="w8uzenyvy"/><path class="kr5ed8blc"/><path class="k-imc5won"/><path class="sk6j96bxz"/><path class="v2c8jgbcu"/><path class="pzd3isbbb"/><path class="lbfs4xt0d"/><path class="baslv7bbj"/><path class="afj03wjfc"/><path class="gamm-6dbx"/><path class="ep7rzrb0n"/><path class="rjv8zrbwa"/><path class="hwcunup3l"/><path class="qgjj_pf0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-in-manual-wheelchair-facing-right-dark"} {...others} />);
}

export default Component;
