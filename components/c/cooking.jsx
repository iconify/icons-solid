import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/p/pb0cyqmbn.css';
import '../../css/r/rqymkl4wo.css';
import '../../css/u/u92jjlbhq.css';
import '../../css/m/m4mdfvbxb.css';
import '../../css/h/hprxunert.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="pb0cyqmbn"/><path class="rqymkl4wo"/><path class="u92jjlbhq"/><path class="m4mdfvbxb"/><path class="hprxunert"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cooking"} {...others} />);
}

export default Component;
