import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/bqgnctfbd.css';
import '../../css/t/t8srh3bsq.css';
import '../../css/m/m0mv3gbgf.css';
import '../../css/h/hu0hzbbeq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGAI7ezcdh"><g class="aql7dnt-u"><path class="bqgnctfbd"/><path class="t8srh3bsq"/><path class="m0mv3gbgf"/><path class="hu0hzbbeq"/></g></mask></defs><path mask="url(#SVGAI7ezcdh)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:api"} {...others} />);
}

export default Component;
