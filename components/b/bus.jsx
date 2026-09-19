import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/r_6nlzbtv.css';
import '../../css/l/l-hm_u4_z.css';
import '../../css/a/appofdctq.css';
import '../../css/q/qig_zznph.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGOR8ep13r"><g class="v3_i3wktz"><path class="r_6nlzbtv"/><path class="l-hm_u4_z"/><path class="appofdctq"/><path class="qig_zznph"/></g></mask></defs><path mask="url(#SVGOR8ep13r)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bus"} {...others} />);
}

export default Component;
