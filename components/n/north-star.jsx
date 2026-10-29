import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zu16e3b1a.css';
import '../../css/i/ih1kgibhh.css';
import '../../css/a/akvdt3bud.css';
import '../../css/n/nmkx9tbvf.css';
import '../../css/b/bcpjzhbty.css';
import '../../css/z/z6h2becmc.css';
import '../../css/z/z0dedwbpe.css';
import '../../css/o/oid-_bcij.css';
import '../../css/s/sqsa5bbeo.css';
import '../../css/m/m8i67q2fj.css';
import '../../css/k/kw6hl203r.css';
import '../../css/v/vv3ctbgft.css';
import '../../css/c/ce0f9i0lq.css';
import '../../css/j/jrwqxsopf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow zu16e3b1a"/><path class="ih1kgibhh wm-a"/><path class="akvdt3bud wm-a"/><path class="nmkx9tbvf wm-a"/><path class="bcpjzhbty wm-a"/><path class="wm-k z6h2becmc"/><path class="wm-k z0dedwbpe"/><path class="oid-_bcij wm-k"/><path class="sqsa5bbeo wm-k"/><path class="m8i67q2fj wm-shine"/><path class="kw6hl203r wm-k"/><path class="vv3ctbgft wm-k"/><path class="ce0f9i0lq wm-k"/><path class="jrwqxsopf wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:north-star"} {...others} />);
}

export default Component;
