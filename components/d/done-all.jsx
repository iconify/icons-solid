import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r29jg_xby.css';
import '../../css/i/iggjj_s5s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="r29jg_xby"/><path class="iggjj_s5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:done-all"} {...others} />);
}

export default Component;
