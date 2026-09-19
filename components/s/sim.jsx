import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/u5c2lzzzo.css';
import '../../css/b/bfo77bb9l.css';
import '../../css/i/ipdg3vquv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGIE4O6drv"><g class="v3_i3wktz"><path class="u5c2lzzzo"/><path class="bfo77bb9l"/><path class="ipdg3vquv"/></g></mask></defs><path mask="url(#SVGIE4O6drv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sim"} {...others} />);
}

export default Component;
