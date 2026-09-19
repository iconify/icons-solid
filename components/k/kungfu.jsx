import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti4q6eknm.css';
import '../../css/b/bsrdbmbai.css';
import '../../css/b/b8c_z7brc.css';
import '../../css/j/j-dpmubjz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ti4q6eknm"><path class="bsrdbmbai"/><path class="b8c_z7brc"/><path class="j-dpmubjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:kungfu"} {...others} />);
}

export default Component;
