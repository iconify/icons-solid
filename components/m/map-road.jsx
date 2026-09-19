import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/kca82-bbm.css';
import '../../css/p/pl_657gxa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGFawpXbsf"><g class="v3_i3wktz"><path class="kca82-bbm"/><path class="pl_657gxa"/></g></mask></defs><path mask="url(#SVGFawpXbsf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:map-road"} {...others} />);
}

export default Component;
