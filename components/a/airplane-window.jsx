import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/p_vjdzb2q.css';
import '../../css/b/br0xn1bug.css';
import '../../css/c/cnwdk_ewy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGuySLTdcI"><g class="aql7dnt-u"><path class="p_vjdzb2q"/><path class="br0xn1bug"/><path class="cnwdk_ewy"/></g></mask></defs><path mask="url(#SVGuySLTdcI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:airplane-window"} {...others} />);
}

export default Component;
