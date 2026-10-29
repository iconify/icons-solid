import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mi7v5hbvw.css';
import '../../css/a/ai5q-kbba.css';
import '../../css/t/t8-4j7c2p.css';
import '../../css/x/xww6dnqya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mi7v5hbvw wm-k"/><path class="ai5q-kbba wm-shadow"/><path class="t8-4j7c2p wm-k"/><path class="wm-a xww6dnqya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:microwave-engrave"} {...others} />);
}

export default Component;
