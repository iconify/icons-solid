import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g23rcvbys.css';
import '../../css/c/cb5q1t0wa.css';
import '../../css/k/ki937_vam.css';
import '../../css/l/legq5bc_c.css';
import '../../css/e/e25_yeuhs.css';
import '../../css/q/qbegytbhw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g23rcvbys"/><path class="cb5q1t0wa"/><g class="ki937_vam"><path class="legq5bc_c"/><circle class="e25_yeuhs"/><circle class="qbegytbhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:serial-tasks"} {...others} />);
}

export default Component;
