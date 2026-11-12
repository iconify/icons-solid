import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lo-a8vbtn.css';
import '../../css/c/cgg6o6b2b.css';
import '../../css/r/rpalb8bzg.css';
import '../../css/x/xozy2mbhz.css';
import '../../css/h/hcg4al51j.css';
import '../../css/d/d9a7xte_z.css';
import '../../css/v/v2ykhjsdk.css';
import '../../css/a/a6y8vcbhl.css';
import '../../css/u/u7cmk7xjd.css';
import '../../css/s/sw3z3yb_m.css';
import '../../css/l/l_1gytc8u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lo-a8vbtn"/><path class="cgg6o6b2b"/><path class="rpalb8bzg"/><path class="xozy2mbhz"/><path class="hcg4al51j"/><path class="d9a7xte_z"/><path class="v2ykhjsdk"/><path class="a6y8vcbhl"/><path class="u7cmk7xjd"/><path class="sw3z3yb_m"/><path class="l_1gytc8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cardinal-apps-light"} {...others} />);
}

export default Component;
