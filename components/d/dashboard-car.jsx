import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/b7e_qlv_s.css';
import '../../css/p/p0mk-tbae.css';
import '../../css/b/b1t58_7xb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGuz93vesT"><g class="aql7dnt-u"><path class="b7e_qlv_s"/><path class="p0mk-tbae"/><path clip-rule="evenodd" class="b1t58_7xb"/></g></mask></defs><path mask="url(#SVGuz93vesT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:dashboard-car"} {...others} />);
}

export default Component;
