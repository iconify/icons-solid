import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pu2s2lbig.css';
import '../../css/p/pyd8uurcz.css';
import '../../css/l/l-j6abbgp.css';
import '../../css/e/e_3yci41k.css';
import '../../css/n/noetulbxy.css';
import '../../css/k/kg7-urb4q.css';
import '../../css/b/b96xznzsu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pu2s2lbig"/><circle class="pyd8uurcz"/><path class="l-j6abbgp"/><path class="e_3yci41k"/><path class="noetulbxy"/><path class="kg7-urb4q"/><path class="b96xznzsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skateboarding-broken"} {...others} />);
}

export default Component;
