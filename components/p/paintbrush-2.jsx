import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/d_rk4bcnx.css';
import '../../css/l/lo3ilabyb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="d_rk4bcnx"/><path class="lo3ilabyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:paintbrush-2"} {...others} />);
}

export default Component;
