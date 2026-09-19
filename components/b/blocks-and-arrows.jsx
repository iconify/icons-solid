import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/x/xk15fiipm.css';
import '../../css/r/r1b3x3b8j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG9ia7lbYh"><g class="aql7dnt-u"><path class="xk15fiipm"/><path class="r1b3x3b8j"/></g></mask></defs><path mask="url(#SVG9ia7lbYh)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:blocks-and-arrows"} {...others} />);
}

export default Component;
