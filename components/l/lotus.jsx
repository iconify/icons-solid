import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/d/dxeb_oimn.css';
import '../../css/l/lvj__6b2u.css';
import '../../css/x/xd8boob5w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGxK65dxM"><g class="aql7dnt-u"><path class="dxeb_oimn"/><path class="lvj__6b2u"/><path class="xd8boob5w"/></g></mask></defs><path mask="url(#SVGGxK65dxM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:lotus"} {...others} />);
}

export default Component;
