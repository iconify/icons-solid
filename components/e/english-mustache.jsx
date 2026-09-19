import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/z/zt7_6-8vu.css';
import '../../css/e/ers2p075t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMCjPsdKX"><g class="ylrso7y3c"><path class="zt7_6-8vu"/><path class="ers2p075t"/></g></mask></defs><path mask="url(#SVGMCjPsdKX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:english-mustache"} {...others} />);
}

export default Component;
