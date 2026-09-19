import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g-zrasb2p.css';
import '../../css/n/nra5i0lcv.css';
import '../../css/b/bikfmnx-p.css';
import '../../css/q/qi_ek4pxg.css';
import '../../css/a/a9503u7on.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGka4KGmRL"><g class="ft5dv1b6b"><path class="g-zrasb2p"/><path class="nra5i0lcv"/><circle transform="rotate(90 34 34)" class="bikfmnx-p"/><path class="qi_ek4pxg"/><circle class="a9503u7on"/></g></mask></defs><path mask="url(#SVGka4KGmRL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:abnormal"} {...others} />);
}

export default Component;
