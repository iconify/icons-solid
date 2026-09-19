import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/bb8tv3klv.css';
import '../../css/w/wdmnkdbcq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG1BAsubKX"><g class="aql7dnt-u"><path class="bb8tv3klv"/><path clip-rule="evenodd" class="wdmnkdbcq"/></g></mask></defs><path mask="url(#SVG1BAsubKX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:anchor-two"} {...others} />);
}

export default Component;
