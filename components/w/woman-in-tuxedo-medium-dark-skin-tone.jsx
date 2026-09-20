import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvyvgvz5m.css';
import '../../css/m/m-bz2_bmo.css';
import '../../css/m/maj2ckbfq.css';
import '../../css/n/nro2gcbox.css';
import '../../css/r/r2q1r-ocn.css';
import '../../css/p/pgc6oqomb.css';
import '../../css/l/l29erq09a.css';
import '../../css/s/sv9stbnfw.css';
import '../../css/z/zrs7i0yuw.css';
import '../../css/u/uyemoacpg.css';
import '../../css/c/c5t8mtbrc.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="pvyvgvz5m"/><path class="m-bz2_bmo"/><path class="maj2ckbfq"/><path class="nro2gcbox"/><path class="r2q1r-ocn"/><path class="pgc6oqomb"/><path class="l29erq09a"/><path class="sv9stbnfw"/><path class="zrs7i0yuw"/><path class="uyemoacpg"/><path class="c5t8mtbrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-in-tuxedo-medium-dark-skin-tone"} {...others} />);
}

export default Component;
