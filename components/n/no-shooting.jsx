import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/g-jwhsbbd.css';
import '../../css/m/mbe_9obgv.css';
import '../../css/i/igso98b1i.css';
import '../../css/h/hwdijdbgq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="g-jwhsbbd"/><path class="mbe_9obgv"/><path class="igso98b1i"/><circle class="hwdijdbgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:no-shooting"} {...others} />);
}

export default Component;
