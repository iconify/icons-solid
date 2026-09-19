import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/cnu9c37td.css';
import '../../css/f/ftfqu8-lo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGS2P7gcrr"><g class="aql7dnt-u"><path class="cnu9c37td"/><path class="ftfqu8-lo"/></g></mask></defs><path mask="url(#SVGS2P7gcrr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:clothes-gloves-two"} {...others} />);
}

export default Component;
