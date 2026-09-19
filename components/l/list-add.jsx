import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/h9q3heb5n.css';
import '../../css/g/gt1o2bcec.css';
import '../../css/g/g-f1-f9hy.css';
import '../../css/s/sur6g4xqv.css';
import '../../css/p/p0_n84c3e.css';
import '../../css/j/j8uavnruf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="h9q3heb5n"/><path class="gt1o2bcec"/><path class="g-f1-f9hy"/><path class="sur6g4xqv"/><path class="p0_n84c3e"/><path class="j8uavnruf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:list-add"} {...others} />);
}

export default Component;
