import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/m-mtxqk7h.css';
import '../../css/r/r71t5ps3q.css';
import '../../css/m/m820zubuq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="m-mtxqk7h"/><path class="r71t5ps3q"/><path class="m820zubuq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hands"} {...others} />);
}

export default Component;
