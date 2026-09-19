import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yh58unu-v.css';
import '../../css/t/tu8gejrmi.css';
import '../../css/y/ykzn9acwh.css';
import '../../css/w/wudku7bxu.css';
import '../../css/d/da7hwvfza.css';
import '../../css/q/qdoivk1ha.css';
import '../../css/l/lj2hjwb6k.css';
import '../../css/z/zg_3zvbti.css';
import '../../css/o/o-lodidit.css';
import '../../css/v/vg6dkpbrn.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="yh58unu-v"/><path class="tu8gejrmi"/><path class="ykzn9acwh"/><path class="wudku7bxu"/><path class="da7hwvfza"/><path class="qdoivk1ha"/><path class="lj2hjwb6k"/><path class="zg_3zvbti"/><path class="o-lodidit"/><path class="vg6dkpbrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:pypi"} {...others} />);
}

export default Component;
