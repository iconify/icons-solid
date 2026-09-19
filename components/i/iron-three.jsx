import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qkde5pb7p.css';
import '../../css/g/gw4vjob_t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGw0dMjA1j"><g class="aql7dnt-u"><path class="qkde5pb7p"/><path class="gw4vjob_t"/></g></mask></defs><path mask="url(#SVGw0dMjA1j)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:iron-three"} {...others} />);
}

export default Component;
