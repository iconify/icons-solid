import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/uq8nfifpp.css';
import '../../css/i/iuda6xbum.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGqgKvhdiB"><g class="aql7dnt-u"><path clip-rule="evenodd" class="uq8nfifpp"/><path class="iuda6xbum"/></g></mask></defs><path mask="url(#SVGqgKvhdiB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:forbid"} {...others} />);
}

export default Component;
