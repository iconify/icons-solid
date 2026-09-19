import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ih70uj44i.css';
import '../../css/k/ktt-wx2-u.css';
import '../../css/e/e99vyzbrd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ih70uj44i"/><path class="ktt-wx2-u"/><path class="e99vyzbrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:font-size"} {...others} />);
}

export default Component;
