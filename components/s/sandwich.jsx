import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/w/w_665e7-p.css';
import '../../css/f/fi7oqzbeg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGD1EMvbsz"><g class="aql7dnt-u"><path class="w_665e7-p"/><path class="fi7oqzbeg"/></g></mask></defs><path mask="url(#SVGD1EMvbsz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sandwich"} {...others} />);
}

export default Component;
