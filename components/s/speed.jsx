import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/m/mm0oaabax.css';
import '../../css/u/u_r6ezb6m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGeomlRcTD"><g class="v3_i3wktz"><path class="mm0oaabax"/><path class="u_r6ezb6m"/></g></mask></defs><path mask="url(#SVGeomlRcTD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:speed"} {...others} />);
}

export default Component;
