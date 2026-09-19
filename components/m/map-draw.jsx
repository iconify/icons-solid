import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/ff066bcmc.css';
import '../../css/w/wrlqzdago.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGAGAFydaD"><g class="aql7dnt-u"><path class="ff066bcmc"/><path class="wrlqzdago"/></g></mask></defs><path mask="url(#SVGAGAFydaD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:map-draw"} {...others} />);
}

export default Component;
