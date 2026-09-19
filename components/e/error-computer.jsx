import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/t15_zcf9t.css';
import '../../css/r/rgpfwjbgz.css';
import '../../css/b/bk0wocfbv.css';
import '../../css/i/i72uxj_3q.css';
import '../../css/p/p8o016kgn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="t15_zcf9t"/><path class="rgpfwjbgz"/><path class="bk0wocfbv"/><path class="i72uxj_3q"/><path class="p8o016kgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:error-computer"} {...others} />);
}

export default Component;
