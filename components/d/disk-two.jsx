import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v8boolb3g.css';
import '../../css/y/y5y9j0l2z.css';
import '../../css/n/nyva0vbzh.css';
import '../../css/s/s3e__hbpb.css';
import '../../css/d/dfbjry0sn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGfKDDObmm"><g class="ft5dv1b6b"><rect class="v8boolb3g"/><path class="y5y9j0l2z"/><path class="nyva0vbzh"/><circle class="s3e__hbpb"/><circle class="dfbjry0sn"/></g></mask></defs><path mask="url(#SVGfKDDObmm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:disk-two"} {...others} />);
}

export default Component;
