import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qgceg4vvs.css';
import '../../css/e/e6lzxacir.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGCPOHvdsv"><g class="aql7dnt-u"><path class="qgceg4vvs"/><path class="e6lzxacir"/></g></mask></defs><path mask="url(#SVGCPOHvdsv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:message"} {...others} />);
}

export default Component;
