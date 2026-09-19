import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/g-847bcbd.css';
import '../../css/n/nz1rcsbyb.css';
import '../../css/p/pvav5obcj.css';
import '../../css/d/ddlvo3bra.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGrd7UHcEO"><g class="aql7dnt-u"><path class="g-847bcbd"/><path class="nz1rcsbyb"/><path class="pvav5obcj"/><path class="ddlvo3bra"/></g></mask></defs><path mask="url(#SVGrd7UHcEO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:green-new-energy"} {...others} />);
}

export default Component;
