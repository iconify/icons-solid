import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q8u41tj8g.css';
import '../../css/e/e8igd9bxa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="q8u41tj8g wm-k"/><path class="e8igd9bxa wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevron-right-sketch"} {...others} />);
}

export default Component;
