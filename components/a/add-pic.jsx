import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr87l5bdb.css';
import '../../css/k/k0rioybmz.css';
import '../../css/f/fzbd34b4c.css';
import '../../css/w/wah34acde.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGbxxcLbnt"><g class="lr87l5bdb"><path class="k0rioybmz"/><path class="fzbd34b4c"/><path class="wah34acde"/></g></mask></defs><path mask="url(#SVGbxxcLbnt)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:add-pic"} {...others} />);
}

export default Component;
