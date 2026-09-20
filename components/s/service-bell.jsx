import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/q/q6_svfe6y.css';
import '../../css/a/a2iqvacfx.css';
import '../../css/e/e2fb2x87h.css';
import '../../css/a/a8x_6tbha.css';
import '../../css/h/hqrl9n_nr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="q6_svfe6y"/><path class="a2iqvacfx"/><path class="e2fb2x87h"/><path class="a8x_6tbha"/><path class="hqrl9n_nr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:service-bell"} {...others} />);
}

export default Component;
