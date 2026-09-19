import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/q/qdbr9_1py.css';
import '../../css/v/vh156zb_f.css';
import '../../css/a/au67ybcgw.css';
import '../../css/v/v-y43hbiv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpJGKkeEd"><g class="v3_i3wktz"><path class="qdbr9_1py"/><path class="vh156zb_f"/><path class="au67ybcgw"/><path class="v-y43hbiv"/></g></mask></defs><path mask="url(#SVGpJGKkeEd)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:user-to-user-transmission"} {...others} />);
}

export default Component;
