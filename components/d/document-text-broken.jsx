import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qudpijb7v.css';
import '../../css/g/goexq_bdp.css';
import '../../css/s/sgjshnbod.css';
import '../../css/h/h4m9tpedx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qudpijb7v"/><path class="goexq_bdp"/><path class="sgjshnbod"/><path class="h4m9tpedx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:document-text-broken"} {...others} />);
}

export default Component;
