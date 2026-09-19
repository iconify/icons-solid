import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/k4z5r1wzq.css';
import '../../css/s/smf_smbgh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTG4Gvere"><g class="v3_i3wktz"><path class="k4z5r1wzq"/><path class="smf_smbgh"/></g></mask></defs><path mask="url(#SVGTG4Gvere)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:umbrella"} {...others} />);
}

export default Component;
