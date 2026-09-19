import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/s/sj4do1flt.css';
import '../../css/x/x3ykur8df.css';
import '../../css/q/qb7n-yw7g.css';
import '../../css/p/psb9-2bhl.css';
import '../../css/b/b1b1ykbsp.css';
import '../../css/v/vobk9sfyn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="sj4do1flt"/><path class="x3ykur8df"/><path class="qb7n-yw7g"/><path class="psb9-2bhl"/><path class="b1b1ykbsp"/><path class="vobk9sfyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:file-cabinet"} {...others} />);
}

export default Component;
