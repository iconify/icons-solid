import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/va1_tpb9y.css';
import '../../css/w/wco3r3bcg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="va1_tpb9y"/><path class="wco3r3bcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:pinwheel"} {...others} />);
}

export default Component;
