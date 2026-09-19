import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ug-3ocbdk.css';
import '../../css/e/e8yll_bta.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkCcpxcEX"><g class="aql7dnt-u"><path class="ug-3ocbdk"/><path class="e8yll_bta"/></g></mask></defs><path mask="url(#SVGkCcpxcEX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:update-rotation"} {...others} />);
}

export default Component;
