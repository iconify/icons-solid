import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/iirtqzb_w.css';
import '../../css/s/sqlr_kgjy.css';
import '../../css/i/inz9m4wmz.css';
import '../../css/d/d741o543y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGeCoyNbcw"><g class="aql7dnt-u"><rect class="iirtqzb_w"/><path class="sqlr_kgjy"/><circle class="inz9m4wmz"/><circle class="d741o543y"/></g></mask></defs><path mask="url(#SVGeCoyNbcw)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:scissors"} {...others} />);
}

export default Component;
