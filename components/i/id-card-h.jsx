import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/w/wzzwdrbyq.css';
import '../../css/q/q8p1cv2uv.css';
import '../../css/l/lurmblhlw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMhPncbRn"><g class="v3_i3wktz"><rect class="wzzwdrbyq"/><path class="q8p1cv2uv"/><path class="lurmblhlw"/></g></mask></defs><path mask="url(#SVGMhPncbRn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:id-card-h"} {...others} />);
}

export default Component;
