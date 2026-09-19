import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/n24zlup5f.css';
import '../../css/v/vhduzt6mh.css';
import '../../css/x/xbne_mbps.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGKuwQcmRM"><g class="v3_i3wktz"><path clip-rule="evenodd" class="n24zlup5f"/><path class="vhduzt6mh"/><path class="xbne_mbps"/></g></mask></defs><path mask="url(#SVGKuwQcmRM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:clear"} {...others} />);
}

export default Component;
