import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/iirtqzb_w.css';
import '../../css/p/p1lghbcur.css';
import '../../css/q/qy_wc_bod.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGoNMuJctZ"><g class="aql7dnt-u"><rect class="iirtqzb_w"/><path class="p1lghbcur"/><path class="qy_wc_bod"/></g></mask></defs><path mask="url(#SVGoNMuJctZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:massage-chair"} {...others} />);
}

export default Component;
