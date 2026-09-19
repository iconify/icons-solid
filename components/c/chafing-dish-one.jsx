import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/l9rtxfqns.css';
import '../../css/w/wy_xx9b5e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkwaXNciN"><g class="aql7dnt-u"><path class="l9rtxfqns"/><path class="wy_xx9b5e"/></g></mask></defs><path mask="url(#SVGkwaXNciN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:chafing-dish-one"} {...others} />);
}

export default Component;
