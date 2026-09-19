import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/alaw1vzcj.css';
import '../../css/x/xo7f3cbol.css';
import '../../css/i/ifmva9g2b.css';
import '../../css/u/u-fos5m-q.css';
import '../../css/l/l72am6s0n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4PIttddU"><g class="aql7dnt-u"><path class="alaw1vzcj"/><path class="xo7f3cbol"/><path class="ifmva9g2b"/><path class="u-fos5m-q"/><path class="l72am6s0n"/></g></mask></defs><path mask="url(#SVG4PIttddU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:database-network-point"} {...others} />);
}

export default Component;
