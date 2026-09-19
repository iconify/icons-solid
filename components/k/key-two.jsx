import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/x7jgcmbxq.css';
import '../../css/v/vbi6qvbrt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="x7jgcmbxq"/><path class="vbi6qvbrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:key-two"} {...others} />);
}

export default Component;
