import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kp4unbbsc.css';
import '../../css/x/xurtk2buy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="kp4unbbsc"/><path class="xurtk2buy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:stroller-flat"} {...others} />);
}

export default Component;
