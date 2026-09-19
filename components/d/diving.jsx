import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/zrya0x9-k.css';
import '../../css/c/cl63yoooc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6FKJTdjq"><g class="aql7dnt-u"><path class="zrya0x9-k"/><path class="cl63yoooc"/></g></mask></defs><path mask="url(#SVG6FKJTdjq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:diving"} {...others} />);
}

export default Component;
