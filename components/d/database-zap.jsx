import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzgw_4bkl.css';
import '../../css/o/o8xc3sbqs.css';
import '../../css/q/qc58m_bpa.css';
import '../../css/r/rn9xopkpt.css';
import '../../css/s/sn44bbbtp.css';
import '../../css/j/jqh_hib1u.css';
import '../../css/l/l_0qtjlot.css';
import '../../css/t/td3xgibio.css';
import '../../css/c/c6aey5ckz.css';
import '../../css/e/etv8ghbkg.css';
import '../../css/w/wtbv2ryth.css';
import '../../css/l/l2edlboip.css';
import '../../css/d/dy10ziqtu.css';
import '../../css/z/z_7zwtjcw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gzgw_4bkl wm-shadow"/><path class="o8xc3sbqs wm-k"/><path class="qc58m_bpa wm-k"/><path class="rn9xopkpt wm-k"/><path class="sn44bbbtp wm-k"/><path class="jqh_hib1u wm-k"/><path class="l_0qtjlot wm-shine"/><path class="td3xgibio wm-k"/><path class="c6aey5ckz wm-a"/><path class="etv8ghbkg wm-s"/><path class="wm-s wtbv2ryth"/><path class="l2edlboip wm-s"/><path class="dy10ziqtu wm-s"/><path class="wm-s z_7zwtjcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:database-zap"} {...others} />);
}

export default Component;
