import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rjsdqzbsq.css';
import '../../css/k/kooq7hlhc.css';
import '../../css/e/e814sabwa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGSrPyjbmL"><g class="aql7dnt-u"><rect class="rjsdqzbsq"/><path class="kooq7hlhc"/><path class="e814sabwa"/></g></mask></defs><path mask="url(#SVGSrPyjbmL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:razor"} {...others} />);
}

export default Component;
