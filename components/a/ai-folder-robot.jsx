import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/x/xegt7kkjb.css';
import '../../css/q/q6ne00hdd.css';
import '../../css/j/jfahzt3vh.css';
import '../../css/h/how_d6bkv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="xegt7kkjb"/><path class="q6ne00hdd"/><path class="jfahzt3vh"/><path class="how_d6bkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:ai-folder-robot"} {...others} />);
}

export default Component;
