import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mv93_cuva.css';
import '../../css/p/pmwnn8bne.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="mv93_cuva"/><path class="pmwnn8bne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:shield-1-flat"} {...others} />);
}

export default Component;
