import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/llpmbrbgw.css';
import '../../css/g/g0ufjysom.css';
import '../../css/r/rkquw6meg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGuJOGTtAE"><g class="aql7dnt-u"><path class="llpmbrbgw"/><path class="g0ufjysom"/><path class="rkquw6meg"/></g></mask></defs><path mask="url(#SVGuJOGTtAE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:carousel-video"} {...others} />);
}

export default Component;
