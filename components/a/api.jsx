import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/blazavdat.css';
import '../../css/v/vox__ujbz.css';
import '../../css/b/byt96gb4g.css';
import '../../css/d/d8s_p9tlx.css';
import '../../css/c/ccuoqxk3x.css';
import '../../css/g/gnsd4nboc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="blazavdat"/><path class="vox__ujbz"/><path class="byt96gb4g"/><path class="d8s_p9tlx"/><path class="ccuoqxk3x"/><path class="gnsd4nboc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:api"} {...others} />);
}

export default Component;
