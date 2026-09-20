import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/a/ajvx-ubxz.css';
import '../../css/h/hb5i_2bff.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ajvx-ubxz"/><path class="hb5i_2bff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:no-smaking-area"} {...others} />);
}

export default Component;
