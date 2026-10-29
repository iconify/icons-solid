import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uzms2zbds.css';
import '../../css/s/swmyrlbhw.css';
import '../../css/e/ek7r2gmod.css';
import '../../css/i/ifw3mkwyi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="uzms2zbds wm-k"/><path class="swmyrlbhw wm-a"/><path class="ek7r2gmod wm-k"/><path class="ifw3mkwyi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:indent-increase-sketch"} {...others} />);
}

export default Component;
