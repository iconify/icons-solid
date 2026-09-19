import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m0xrrzbhk.css';
import '../../css/v/v65843kyz.css';
import '../../css/q/qw56dwb0a.css';
import '../../css/h/hb6mshb9x.css';
import '../../css/v/vc4xh1h1m.css';
import '../../css/w/w3sn6ob4o.css';
import '../../css/j/j207dcbbt.css';
import '../../css/j/jtdbp29_t.css';
import '../../css/v/vovqaz1wo.css';
import '../../css/c/c1y6apadz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="m0xrrzbhk"/><circle class="v65843kyz"/><path class="qw56dwb0a"/><path class="hb6mshb9x"/><path class="vc4xh1h1m"/><path class="w3sn6ob4o"/><path class="j207dcbbt"/><path class="jtdbp29_t"/><path class="vovqaz1wo"/><path class="c1y6apadz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:folder-settings"} {...others} />);
}

export default Component;
