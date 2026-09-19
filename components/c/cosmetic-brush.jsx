import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/i/i3dlfabsg.css';
import '../../css/n/nego-k8tl.css';
import '../../css/x/xpluur1uo.css';
import '../../css/s/sptemzbds.css';
import '../../css/s/snn_uxbxk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZ3E4HdkS"><g class="v3_i3wktz"><path class="i3dlfabsg"/><path class="nego-k8tl"/><path class="xpluur1uo"/><path class="sptemzbds"/><path class="snn_uxbxk"/></g></mask></defs><path mask="url(#SVGZ3E4HdkS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:cosmetic-brush"} {...others} />);
}

export default Component;
