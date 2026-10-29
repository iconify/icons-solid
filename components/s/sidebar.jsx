import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yp8f--bzg.css';
import '../../css/m/m8435zb_a.css';
import '../../css/a/a1bejab6p.css';
import '../../css/o/orynw6b6y.css';
import '../../css/d/dxgt2xn1y.css';
import '../../css/u/uf9dvqb-c.css';
import '../../css/t/tbceqkb0g.css';
import '../../css/x/x3bsi-q1n.css';
import '../../css/b/b_4x-zw6u.css';
import '../../css/y/y9mivwbvs.css';
import '../../css/c/c7q495bsm.css';
import '../../css/p/p8avh_5jc.css';
import '../../css/t/t8i2tzglm.css';
import '../../css/q/q153spbse.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow yp8f--bzg"/><path class="m8435zb_a wm-k"/><path class="a1bejab6p wm-k"/><path class="orynw6b6y wm-k"/><path class="dxgt2xn1y wm-k"/><path class="uf9dvqb-c wm-k"/><path class="tbceqkb0g wm-shine"/><path class="wm-k x3bsi-q1n"/><path class="b_4x-zw6u wm-k"/><path class="wm-k y9mivwbvs"/><path class="c7q495bsm wm-a"/><path class="p8avh_5jc wm-a"/><path class="t8i2tzglm wm-a"/><path class="q153spbse wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:sidebar"} {...others} />);
}

export default Component;
