import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u6pozt1zx.css';
import '../../css/g/g_o9d2o_f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="u6pozt1zx"/><path class="g_o9d2o_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:expand-horizontal-2"} {...others} />);
}

export default Component;
