import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/x/xf_l2p71t.css';
import '../../css/x/xexwo663a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGW2qGme4O"><g class="aql7dnt-u"><path class="xf_l2p71t"/><path class="xexwo663a"/></g></mask></defs><path mask="url(#SVGW2qGme4O)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:cube-four"} {...others} />);
}

export default Component;
