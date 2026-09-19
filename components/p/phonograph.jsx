import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y2vxtlsou.css';
import '../../css/p/p8ww2vb4a.css';
import '../../css/u/uudi_xbce.css';
import '../../css/j/j8-rwp7zn.css';
import '../../css/l/lci8q9jxp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGUMMJWWq"><g class="ft5dv1b6b"><rect class="y2vxtlsou"/><circle class="p8ww2vb4a"/><rect class="uudi_xbce"/><rect class="j8-rwp7zn"/><path class="lci8q9jxp"/></g></mask></defs><path mask="url(#SVGGUMMJWWq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:phonograph"} {...others} />);
}

export default Component;
