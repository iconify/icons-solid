import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/dlbic1bgo.css';
import '../../css/z/zt8glxhsg.css';
import '../../css/l/lpo9v9cnc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGcwdLOerW"><g class="v3_i3wktz"><path class="dlbic1bgo"/><path clip-rule="evenodd" class="zt8glxhsg"/><path class="lpo9v9cnc"/></g></mask></defs><path mask="url(#SVGcwdLOerW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:calendar-thirty-two"} {...others} />);
}

export default Component;
