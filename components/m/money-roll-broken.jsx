import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xlmqkwltw.css';
import '../../css/l/lfgjsbbbx.css';
import '../../css/t/tloly4b5q.css';
import '../../css/p/p8dszccnh.css';
import '../../css/q/qrtoedc3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xlmqkwltw"/><path class="lfgjsbbbx"/><path class="tloly4b5q"/><path class="p8dszccnh"/><path class="qrtoedc3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:money-roll-broken"} {...others} />);
}

export default Component;
