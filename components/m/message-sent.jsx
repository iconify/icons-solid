import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qgceg4vvs.css';
import '../../css/x/xr1cpub8x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGKM1ffcso"><g class="aql7dnt-u"><path class="qgceg4vvs"/><path class="xr1cpub8x"/></g></mask></defs><path mask="url(#SVGKM1ffcso)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:message-sent"} {...others} />);
}

export default Component;
