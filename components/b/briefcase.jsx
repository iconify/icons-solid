import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xwh3-0bhi.css';
import '../../css/s/s9o44zz8v.css';
import '../../css/t/t4_ftjb0l.css';
import '../../css/r/rwcph-b2w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="xwh3-0bhi"/><path class="s9o44zz8v"/><path class="t4_ftjb0l"/><path class="rwcph-b2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:briefcase"} {...others} />);
}

export default Component;
