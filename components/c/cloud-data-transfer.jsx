import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/t/tetfb2btu.css';
import '../../css/i/irgek0igd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="tetfb2btu"/><path class="irgek0igd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:cloud-data-transfer"} {...others} />);
}

export default Component;
