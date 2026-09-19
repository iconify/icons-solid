import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/pmnqhbbry.css';
import '../../css/z/zaphmil7a.css';
import '../../css/d/dzb1bmbuu.css';
import '../../css/b/bc-oy4boy.css';
import '../../css/m/mffwcnbwh.css';
import '../../css/l/l49-56bkm.css';
import '../../css/s/s9yuj3byd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="pmnqhbbry"/><path class="zaphmil7a"/><path class="dzb1bmbuu"/><path class="bc-oy4boy"/><rect class="mffwcnbwh"/><path class="l49-56bkm"/><path class="s9yuj3byd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:barber-clippers"} {...others} />);
}

export default Component;
