import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pv-ktibnd.css';
import '../../css/m/msgncjdxc.css';
import '../../css/b/bhyjiupcc.css';
import '../../css/r/r7sa26b2f.css';
import '../../css/b/be-xblb1x.css';
import '../../css/h/huc6hab1d.css';
import '../../css/j/jhy_5ites.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="pv-ktibnd"/><path class="msgncjdxc"/><path class="bhyjiupcc"/><path class="r7sa26b2f"/><path class="be-xblb1x"/><path class="huc6hab1d"/><path class="jhy_5ites"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:data-switching"} {...others} />);
}

export default Component;
