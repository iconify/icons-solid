import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/iqrgdmrau.css';
import '../../css/s/sokgr3bpp.css';
import '../../css/m/mspyw2bgg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdljXqdEr"><g class="aql7dnt-u"><rect class="iqrgdmrau"/><path class="sokgr3bpp"/><path class="mspyw2bgg"/></g></mask></defs><path mask="url(#SVGdljXqdEr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:nail-polish-one"} {...others} />);
}

export default Component;
