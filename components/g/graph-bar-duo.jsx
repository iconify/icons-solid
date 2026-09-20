import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thjuvbz3w.css';
import '../../css/h/h38d_5zoo.css';
import '../../css/s/syvgjcb2o.css';
import '../../css/y/yvxwszbyd.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="thjuvbz3w"><path class="h38d_5zoo"/><path class="syvgjcb2o"/><path class="yvxwszbyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:graph-bar-duo"} {...others} />);
}

export default Component;
