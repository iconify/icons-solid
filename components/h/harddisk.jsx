import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ge_dsy-5a.css';
import '../../css/l/ljz6fshnu.css';
import '../../css/j/jekfsfzvx.css';
import '../../css/n/n7ac0xbcx.css';
import '../../css/s/skk33b_nv.css';
import '../../css/v/vf6e-d3my.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ge_dsy-5a"/><circle class="ljz6fshnu"/><path class="jekfsfzvx"/><path class="n7ac0xbcx"/><path class="skk33b_nv"/><path class="vf6e-d3my"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:harddisk"} {...others} />);
}

export default Component;
