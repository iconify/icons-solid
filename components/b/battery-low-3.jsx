import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/ytpthob6n.css';
import '../../css/x/xxe3d9b_s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ytpthob6n"/><path class="xxe3d9b_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:battery-low-3"} {...others} />);
}

export default Component;
