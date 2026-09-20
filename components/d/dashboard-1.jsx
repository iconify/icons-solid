import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/sz-0w92_t.css';
import '../../css/v/vl62dnhlu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="sz-0w92_t"/><path class="vl62dnhlu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:dashboard-1"} {...others} />);
}

export default Component;
