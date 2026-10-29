import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lydmw8yfb.css';
import '../../css/d/dtyb4zbgu.css';
import '../../css/y/yafmuequb.css';
import '../../css/f/fxqaxnipa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lydmw8yfb"/><path class="dtyb4zbgu wm-a"/><path class="wm-k yafmuequb"/><path class="fxqaxnipa wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:id-card-sketch"} {...others} />);
}

export default Component;
