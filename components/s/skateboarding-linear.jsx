import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/um3c8ib4d.css';
import '../../css/p/pyd8uurcz.css';
import '../../css/l/l-j6abbgp.css';
import '../../css/e/e_3yci41k.css';
import '../../css/n/noetulbxy.css';
import '../../css/k/kg7-urb4q.css';
import '../../css/b/b96xznzsu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="um3c8ib4d"/><circle class="pyd8uurcz"/><path class="l-j6abbgp"/><path class="e_3yci41k"/><path class="noetulbxy"/><path class="kg7-urb4q"/><path class="b96xznzsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skateboarding-linear"} {...others} />);
}

export default Component;
