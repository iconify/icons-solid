import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cx30rnqyk.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/l/l8s031fwy.css';
import '../../css/s/sgu_fyztv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cx30rnqyk"/><g class="xtpeb-edw"><path class="l8s031fwy"/><path class="sgu_fyztv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bluetooth-wave-bold-duotone"} {...others} />);
}

export default Component;
