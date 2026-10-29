import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p-ecgsbth.css';
import '../../css/i/idbb1xbeg.css';
import '../../css/r/rd_du7bup.css';
import '../../css/y/y_75pee_k.css';
import '../../css/n/n5i_u529p.css';
import '../../css/q/q02dutb7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="p-ecgsbth wm-deco"/><path class="idbb1xbeg wm-deco"/><path class="rd_du7bup wm-k"/><path class="wm-k y_75pee_k"/><path class="n5i_u529p wm-a"/><path class="q02dutb7d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sort-blueprint"} {...others} />);
}

export default Component;
