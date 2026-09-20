import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/ptku9_7wa.css';
import '../../css/t/taogqpb9g.css';
import '../../css/t/tase98tfq.css';
import '../../css/p/pob85mb3x.css';
import '../../css/a/avdzeya6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ptku9_7wa"/><path class="taogqpb9g"/><path class="tase98tfq"/><path class="pob85mb3x"/><path class="avdzeya6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grid-2x2-close-broken"} {...others} />);
}

export default Component;
