import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x5tr0cc0q.css';
import '../../css/q/qmcm-kbhi.css';
import '../../css/p/ppo49n8pg.css';
import '../../css/t/txm-rabnp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="x5tr0cc0q"/><path class="qmcm-kbhi wm-a"/><path class="ppo49n8pg wm-k"/><path class="txm-rabnp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pin-sketch"} {...others} />);
}

export default Component;
