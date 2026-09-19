import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/nxj9c8cpq.css';
import '../../css/t/ty4d2jlgr.css';
import '../../css/h/h1vo1h1bn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG88OrNbFr"><g class="v3_i3wktz"><path class="nxj9c8cpq"/><path class="ty4d2jlgr"/><path class="h1vo1h1bn"/></g></mask></defs><path mask="url(#SVG88OrNbFr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:coordinate-system"} {...others} />);
}

export default Component;
