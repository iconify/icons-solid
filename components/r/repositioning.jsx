import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/bdotxcbte.css';
import '../../css/w/wopx2abkp.css';
import '../../css/r/rrtdp8m6q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGM3iBgaLp"><g class="aql7dnt-u"><path class="bdotxcbte"/><path class="wopx2abkp"/><path class="rrtdp8m6q"/></g></mask></defs><path mask="url(#SVGM3iBgaLp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:repositioning"} {...others} />);
}

export default Component;
