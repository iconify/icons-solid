import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/tu9gpkbal.css';
import '../../css/v/v5warx7kp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="tu9gpkbal"/><path class="v5warx7kp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:landscape"} {...others} />);
}

export default Component;
