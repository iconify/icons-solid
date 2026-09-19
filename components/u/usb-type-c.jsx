import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/akm23jbon.css';
import '../../css/f/fwbu3rrnt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlxy0VdtO"><g class="aql7dnt-u"><path class="akm23jbon"/><path class="fwbu3rrnt"/></g></mask></defs><path mask="url(#SVGlxy0VdtO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:usb-type-c"} {...others} />);
}

export default Component;
