import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/c/cpvlsib2p.css';
import '../../css/a/aa2jaubia.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGOftHKdcs"><g class="v3_i3wktz"><path class="cpvlsib2p"/><path class="aa2jaubia"/></g></mask></defs><path mask="url(#SVGOftHKdcs)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:align-right"} {...others} />);
}

export default Component;
