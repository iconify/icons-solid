import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/ocu06zbra.css';
import '../../css/b/b5yxc2b_y.css';
import '../../css/m/mdnlgwb3d.css';
import '../../css/o/oynk-s10v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGoWG3zdla"><g class="aql7dnt-u"><rect class="ocu06zbra"/><path class="b5yxc2b_y"/><circle class="mdnlgwb3d"/><circle class="oynk-s10v"/></g></mask></defs><path mask="url(#SVGoWG3zdla)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:data-screen"} {...others} />);
}

export default Component;
