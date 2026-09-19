import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/ktt-wx2-u.css';
import '../../css/l/l0ug14bvz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ktt-wx2-u"/><path class="l0ug14bvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:arrow-up"} {...others} />);
}

export default Component;
