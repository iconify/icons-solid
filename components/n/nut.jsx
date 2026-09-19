import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/b78zgt2fl.css';
import '../../css/p/pbq-lun4p.css';
import '../../css/s/smitfpbcd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="b78zgt2fl"/><path class="pbq-lun4p"/><path class="smitfpbcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:nut"} {...others} />);
}

export default Component;
