import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nla2lvbqy.css';
import '../../css/x/xvv_svbqr.css';
import '../../css/j/jr6euqw6a.css';
import '../../css/q/qjin41bbi.css';
import '../../css/i/i_eoyepud.css';
import '../../css/r/rj9igxbdl.css';
import '../../css/a/avwrpqfiu.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="nla2lvbqy"/><path class="xvv_svbqr"/><path class="jr6euqw6a"/><path class="qjin41bbi"/><path class="i_eoyepud"/><path class="rj9igxbdl"/></g><path class="avwrpqfiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:nix-lock"} {...others} />);
}

export default Component;
