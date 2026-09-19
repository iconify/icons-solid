import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/oxacldbke.css';
import '../../css/n/nv6axyjzb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGBNJnmevQ"><g class="aql7dnt-u"><path class="oxacldbke"/><path class="nv6axyjzb"/></g></mask></defs><path mask="url(#SVGBNJnmevQ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:folder-focus-one"} {...others} />);
}

export default Component;
