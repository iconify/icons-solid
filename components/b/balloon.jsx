import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/ustdt-b_z.css';
import '../../css/d/d35n-zt7v.css';
import '../../css/z/z1fo34bzu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ustdt-b_z"/><path class="d35n-zt7v"/><path class="z1fo34bzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:balloon"} {...others} />);
}

export default Component;
