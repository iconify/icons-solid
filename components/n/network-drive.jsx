import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/idtbkobxl.css';
import '../../css/l/lwpanqbve.css';
import '../../css/w/wfaf1ggge.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGmIHPWbdb"><g class="aql7dnt-u"><path class="idtbkobxl"/><path class="lwpanqbve"/><path class="wfaf1ggge"/></g></mask></defs><path mask="url(#SVGmIHPWbdb)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:network-drive"} {...others} />);
}

export default Component;
