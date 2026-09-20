import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pws9-9-po.css';
import '../../css/g/gw8i0w2vi.css';
import '../../css/m/mmltf__ll.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="pws9-9-po"/><path clip-rule="evenodd" class="gw8i0w2vi"/><path class="mmltf__ll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:lightbulb-flat"} {...others} />);
}

export default Component;
