import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3bxgtpkh.css';
import '../../css/z/zyxli4b-u.css';
import '../../css/u/ugclvgbnt.css';
import '../../css/r/rlqvp4bbw.css';
import '../../css/d/d_qd_acsh.css';
import '../../css/g/g64732bny.css';
import '../../css/w/wn_rrxntm.css';
import '../../css/b/b8thn_byl.css';
import '../../css/v/v0j3y9bak.css';
import '../../css/s/sfnxqqbts.css';
import '../../css/n/n_spm6bkq.css';
import '../../css/c/cmy8ohbis.css';
import '../../css/h/h8u5pzn6q.css';
import '../../css/s/s9lar-bjc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w3bxgtpkh"/><path class="zyxli4b-u"/><path class="ugclvgbnt"/><path class="rlqvp4bbw"/><path class="d_qd_acsh"/><path class="g64732bny"/><path class="wn_rrxntm"/><path class="b8thn_byl"/><path class="v0j3y9bak"/><path class="sfnxqqbts"/><path class="n_spm6bkq"/><path class="cmy8ohbis"/><path class="h8u5pzn6q"/><path class="s9lar-bjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:tennis-2"} {...others} />);
}

export default Component;
