import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wugu-pb1m.css';
import '../../css/m/mn2rw-mej.css';
import '../../css/h/hp5s0iz9m.css';
import '../../css/k/k40q1abcl.css';
import '../../css/x/xomu_abkw.css';
import '../../css/z/zzb05gbtm.css';
import '../../css/i/ixkzc_bxb.css';
import '../../css/p/p6vvctrfm.css';
import '../../css/e/et8tnfdfe.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="wugu-pb1m"/><path class="mn2rw-mej"/><path class="hp5s0iz9m"/><path class="k40q1abcl"/><path class="xomu_abkw"/><path class="zzb05gbtm"/><path class="ixkzc_bxb"/><path class="p6vvctrfm"/><path class="et8tnfdfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:postgis"} {...others} />);
}

export default Component;
