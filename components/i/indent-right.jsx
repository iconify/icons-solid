import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/x8oigu9lu.css';
import '../../css/r/ri3vjzb7a.css';
import '../../css/q/ql1bcqbas.css';
import '../../css/p/pr-_v72co.css';
import '../../css/w/wpmhq029i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="x8oigu9lu"/><path class="ri3vjzb7a"/><path class="ql1bcqbas"/><path class="pr-_v72co"/><path class="wpmhq029i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:indent-right"} {...others} />);
}

export default Component;
