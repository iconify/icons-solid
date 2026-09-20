import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzs0k9l1h.css';
import '../../css/m/msx4qgb5t.css';
import '../../css/o/oyl3ocbxm.css';
import '../../css/a/acavipbky.css';
import '../../css/d/dn25ttbdw.css';
import '../../css/a/a7i4ynbgg.css';
import '../../css/i/il7bl4ciz.css';
import '../../css/r/r_a7dbcyg.css';
import '../../css/k/k9wms9b7c.css';
import '../../css/f/fmci2ubae.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hzs0k9l1h"/><path class="msx4qgb5t"/><path class="oyl3ocbxm"/><path class="acavipbky"/><path class="dn25ttbdw"/><path class="a7i4ynbgg"/><path class="il7bl4ciz"/><path class="r_a7dbcyg"/><path class="k9wms9b7c"/><path class="fmci2ubae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:peace-symbol"} {...others} />);
}

export default Component;
