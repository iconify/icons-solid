import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rq-hfbc3v.css';
import '../../css/l/ljsyardgv.css';
import '../../css/i/i-oj57g7w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG14vxmeWP"><g class="aql7dnt-u"><path class="rq-hfbc3v"/><path class="ljsyardgv"/><path class="i-oj57g7w"/></g></mask></defs><path mask="url(#SVG14vxmeWP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:drone"} {...others} />);
}

export default Component;
