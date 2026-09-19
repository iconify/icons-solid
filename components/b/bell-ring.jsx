import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/ww842zbcc.css';
import '../../css/m/mi8rjt1cf.css';
import '../../css/z/zhuts_mif.css';
import '../../css/k/k_9--z39r.css';
import '../../css/n/nqmwqib5p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><circle class="ww842zbcc"/><path class="mi8rjt1cf"/><path class="zhuts_mif"/><circle class="k_9--z39r"/><path class="nqmwqib5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bell-ring"} {...others} />);
}

export default Component;
