import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/o_2q90b0x.css';
import '../../css/k/kg437qblz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="o_2q90b0x"/><path class="kg437qblz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:color-picker"} {...others} />);
}

export default Component;
