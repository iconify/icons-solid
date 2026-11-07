import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aqn8_gw_r.css';
import '../../css/f/fqu4-ynwx.css';
import '../../css/h/h3hjjdb4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="aqn8_gw_r"/><path class="fqu4-ynwx"/><path class="h3hjjdb4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layout-freeform-broken"} {...others} />);
}

export default Component;
