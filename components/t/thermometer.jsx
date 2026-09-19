import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/o/o-op5h98v.css';
import '../../css/d/d8ik5ij4p.css';
import '../../css/d/dejs93-4n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="o-op5h98v"/><path class="d8ik5ij4p"/><path class="dejs93-4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:thermometer"} {...others} />);
}

export default Component;
