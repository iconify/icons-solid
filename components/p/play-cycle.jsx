import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/sk8eslb3l.css';
import '../../css/u/u79z_ybyy.css';
import '../../css/k/kcka1jiyl.css';
import '../../css/v/vks1wx6ok.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="sk8eslb3l"/><path class="u79z_ybyy"/><path class="kcka1jiyl"/><path class="vks1wx6ok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:play-cycle"} {...others} />);
}

export default Component;
