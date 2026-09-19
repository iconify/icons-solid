import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mxp84ibzr.css';
import '../../css/t/tnokb4_9i.css';
import '../../css/x/xxy4glkza.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGFAGCHeXA"><g class="aql7dnt-u"><path class="mxp84ibzr"/><path class="tnokb4_9i"/><path class="xxy4glkza"/></g></mask></defs><path mask="url(#SVGFAGCHeXA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:push-door"} {...others} />);
}

export default Component;
