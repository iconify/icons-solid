import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xvb1l6b4q.css';
import '../../css/q/qhxb-wx7w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="xvb1l6b4q"/><path class="qhxb-wx7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:right-small-up"} {...others} />);
}

export default Component;
