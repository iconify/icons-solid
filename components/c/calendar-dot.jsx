import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/j_frwf33v.css';
import '../../css/u/ule3zhb1a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGc7qFMboN"><g class="aql7dnt-u"><rect class="j_frwf33v"/><path class="ule3zhb1a"/></g></mask></defs><path mask="url(#SVGc7qFMboN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:calendar-dot"} {...others} />);
}

export default Component;
