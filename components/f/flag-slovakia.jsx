import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/r/rrfyfxb_f.css';
import '../../css/o/otq39xo5k.css';
import '../../css/p/pmo_98-ut.css';
import '../../css/v/ves96ve-k.css';
import '../../css/d/dftjnj_jj.css';
import '../../css/i/ihg_ueayb.css';
import '../../css/z/zrc_hgbii.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><path class="rrfyfxb_f"/><path class="otq39xo5k"/><path class="pmo_98-ut"/><path class="ves96ve-k"/><circle class="dftjnj_jj"/><path class="ihg_ueayb"/><path class="zrc_hgbii"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-slovakia"} {...others} />);
}

export default Component;
