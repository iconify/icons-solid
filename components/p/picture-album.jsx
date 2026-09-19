import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/i/i5misbc2b.css';
import '../../css/w/wbasp_ynt.css';
import '../../css/w/wp3pith5r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGBCL8Dd5y"><g class="v3_i3wktz"><rect class="i5misbc2b"/><path class="wbasp_ynt"/><path class="wp3pith5r"/></g></mask></defs><path mask="url(#SVGBCL8Dd5y)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:picture-album"} {...others} />);
}

export default Component;
