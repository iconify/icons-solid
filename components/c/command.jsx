import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/p/pmn-s_e-h.css';
import '../../css/w/wuekglbtb.css';
import '../../css/j/jid1799ri.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGH2yzYimC"><g class="v3_i3wktz"><path class="pmn-s_e-h"/><path class="wuekglbtb"/><path class="jid1799ri"/></g></mask></defs><path mask="url(#SVGH2yzYimC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:command"} {...others} />);
}

export default Component;
