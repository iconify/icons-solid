import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/w/w8kvpjbaf.css';
import '../../css/z/z0g_x0l7u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGO9Gm5CEn"><g class="aql7dnt-u"><path class="w8kvpjbaf"/><path class="z0g_x0l7u"/></g></mask></defs><path mask="url(#SVGO9Gm5CEn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:coronavirus"} {...others} />);
}

export default Component;
