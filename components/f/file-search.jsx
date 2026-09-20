import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/m/m49l8pwol.css';
import '../../css/w/wuhe8bc2l.css';
import '../../css/o/opzb1vb-n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path clip-rule="evenodd" class="m49l8pwol"/><path class="wuhe8bc2l"/><path class="opzb1vb-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:file-search"} {...others} />);
}

export default Component;
