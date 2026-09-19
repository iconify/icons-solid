import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/d4oyb2wqm.css';
import '../../css/t/tx6iv9bwx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2McFke6e"><g class="v3_i3wktz"><path class="d4oyb2wqm"/><path class="tx6iv9bwx"/></g></mask></defs><path mask="url(#SVG2McFke6e)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:phone-outgoing"} {...others} />);
}

export default Component;
