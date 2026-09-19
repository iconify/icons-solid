import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/olbdy62vw.css';
import '../../css/a/adkgjib1p.css';
import '../../css/n/n6zdtvbbl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGDIodFe2x"><g class="aql7dnt-u"><path class="olbdy62vw"/><path class="adkgjib1p"/><path class="n6zdtvbbl"/></g></mask></defs><path mask="url(#SVGDIodFe2x)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:clothes-pants-sweat"} {...others} />);
}

export default Component;
