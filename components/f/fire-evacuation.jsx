import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/kbsp6ebnd.css';
import '../../css/k/kiit49bvi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="kbsp6ebnd"/><path class="kiit49bvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:fire-evacuation"} {...others} />);
}

export default Component;
