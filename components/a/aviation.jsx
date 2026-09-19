import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/uisjjab3n.css';
import '../../css/n/n56shgq8s.css';
import '../../css/y/y4s4b2nva.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUTP4remN"><g class="v3_i3wktz"><path class="uisjjab3n"/><path class="n56shgq8s"/><path class="y4s4b2nva"/></g></mask></defs><path mask="url(#SVGUTP4remN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:aviation"} {...others} />);
}

export default Component;
