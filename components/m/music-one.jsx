import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/o/o4_dtfbdv.css';
import '../../css/e/e14b7qcgu.css';
import '../../css/e/e1444ccft.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGCFI2PcYZ"><g class="v3_i3wktz"><path class="o4_dtfbdv"/><path class="e14b7qcgu"/><path clip-rule="evenodd" class="e1444ccft"/></g></mask></defs><path mask="url(#SVGCFI2PcYZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:music-one"} {...others} />);
}

export default Component;
