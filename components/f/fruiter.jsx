import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mfakywb0k.css';
import '../../css/s/s4337tbbk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="mfakywb0k"/><path class="s4337tbbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:fruiter"} {...others} />);
}

export default Component;
