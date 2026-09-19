import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nla2lvbqy.css';
import '../../css/x/xvv_svbqr.css';
import '../../css/j/jr6euqw6a.css';
import '../../css/y/yzn7z5b6v.css';
import '../../css/j/jxgdiw6pd.css';
import '../../css/r/rj9igxbdl.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="nla2lvbqy"/><path class="xvv_svbqr"/><path class="jr6euqw6a"/><path class="yzn7z5b6v"/><path class="jxgdiw6pd"/><path class="rj9igxbdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:nix"} {...others} />);
}

export default Component;
