import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/m/mj5ihl_xe.css';
import '../../css/t/tytl47brg.css';
import '../../css/h/hk10o4-it.css';
import '../../css/h/hvb2mdben.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="mj5ihl_xe"/><path class="tytl47brg"/><path class="hk10o4-it"/><path class="hvb2mdben"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:flash-timer"} {...others} />);
}

export default Component;
