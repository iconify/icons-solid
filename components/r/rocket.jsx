import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/x17ukbcbo.css';
import '../../css/z/zzjpy38cy.css';
import '../../css/l/lnnuobc8v.css';
import '../../css/c/ceex2jbvw.css';
import '../../css/g/gv1e2mbea.css';
import '../../css/w/w6d_sbinx.css';
import '../../css/t/tea9jc-ub.css';
import '../../css/j/jltgjtq1x.css';
import '../../css/t/t20ne0f3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow x17ukbcbo"/><path class="zzjpy38cy"/><path class="lnnuobc8v"/><path class="ceex2jbvw"/><path class="gv1e2mbea"/><path class="w6d_sbinx"/><path class="tea9jc-ub"/><path class="jltgjtq1x wm-shine"/><path class="t20ne0f3d wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:rocket"} {...others} />);
}

export default Component;
