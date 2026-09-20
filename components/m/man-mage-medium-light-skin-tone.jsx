import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed-idh1qq.css';
import '../../css/o/oychbz_cf.css';
import '../../css/o/of8mm1j3i.css';
import '../../css/i/iv-4shggh.css';
import '../../css/x/x6o_f8bzm.css';
import '../../css/a/ahz0upblx.css';
import '../../css/d/d6s2xjbwc.css';
import '../../css/x/xfkfdkb1k.css';
import '../../css/d/d5d9zrb0b.css';
import '../../css/w/wywwqb07d.css';
import '../../css/w/wkz0_n5gi.css';
import '../../css/q/q3aj0vory.css';
import '../../css/l/leg2aibbb.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ed-idh1qq"/><path class="oychbz_cf"/><path class="of8mm1j3i"/><path class="iv-4shggh"/><path class="x6o_f8bzm"/><path class="ahz0upblx"/><path class="d6s2xjbwc"/><path class="xfkfdkb1k"/><path class="d5d9zrb0b"/><path class="wywwqb07d"/><path class="wkz0_n5gi"/><path class="q3aj0vory"/><path class="leg2aibbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-mage-medium-light-skin-tone"} {...others} />);
}

export default Component;
