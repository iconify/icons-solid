import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/ip3i1kbac.css';
import '../../css/y/y9le7cbpd.css';
import '../../css/w/wojuw_vqb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGekO9JeGR"><g class="aql7dnt-u"><path class="ip3i1kbac"/><path class="y9le7cbpd"/><path class="wojuw_vqb"/></g></mask></defs><path mask="url(#SVGekO9JeGR)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:scallion"} {...others} />);
}

export default Component;
