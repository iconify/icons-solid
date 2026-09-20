import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/r/rz38ef30w.css';
import '../../css/e/envxb6r8b.css';
import '../../css/n/n56dvhbyd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="rz38ef30w"/><path class="envxb6r8b"/><path class="n56dvhbyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:leaf-protect"} {...others} />);
}

export default Component;
