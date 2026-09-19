import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/vclgtvb-s.css';
import '../../css/l/ln2abc9qm.css';
import '../../css/h/hrp1nacdz.css';
import '../../css/q/qdl2kvbja.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGX83bAeeE"><g class="rohhhzb0l"><path class="vclgtvb-s"/><path class="ln2abc9qm"/><path class="hrp1nacdz"/><path class="qdl2kvbja"/></g></mask></defs><path mask="url(#SVGX83bAeeE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:peach"} {...others} />);
}

export default Component;
