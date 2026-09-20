import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/m/mkawfsbkt.css';
import '../../css/n/nz3hu6bdm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="mkawfsbkt"/><path class="nz3hu6bdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:graduation-cap"} {...others} />);
}

export default Component;
