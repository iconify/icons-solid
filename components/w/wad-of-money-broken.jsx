import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w4hg72bzc.css';
import '../../css/w/wws34lbrr.css';
import '../../css/t/tloly4b5q.css';
import '../../css/p/p8dszccnh.css';
import '../../css/q/qrtoedc3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="w4hg72bzc"/><path class="wws34lbrr"/><path class="tloly4b5q"/><path class="p8dszccnh"/><path class="qrtoedc3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wad-of-money-broken"} {...others} />);
}

export default Component;
