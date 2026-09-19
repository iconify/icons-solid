import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/zta2u8b6n.css';
import '../../css/z/z4tkxcc3q.css';
import '../../css/m/meuc3b1yt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="zta2u8b6n"/><path class="z4tkxcc3q"/><path class="meuc3b1yt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:center-alignment"} {...others} />);
}

export default Component;
