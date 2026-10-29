import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/txh3gyb8p.css';
import '../../css/e/eo2zzab0y.css';
import '../../css/e/ealqjspgh.css';
import '../../css/a/alnmo4tuz.css';
import '../../css/r/r4fd_99rh.css';
import '../../css/g/gkcvw4bgc.css';
import '../../css/f/f5_l8rbvn.css';
import '../../css/k/k2cc60bou.css';
import '../../css/s/sbapcibxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="txh3gyb8p wm-shadow"/><path class="eo2zzab0y wm-shadow"/><path class="ealqjspgh"/><path class="alnmo4tuz"/><path class="r4fd_99rh"/><path class="gkcvw4bgc"/><path class="f5_l8rbvn wm-shine"/><path class="k2cc60bou wm-shine"/><path class="sbapcibxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:navigation"} {...others} />);
}

export default Component;
