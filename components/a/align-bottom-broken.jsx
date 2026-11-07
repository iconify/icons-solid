import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tkfxeb0-d.css';
import '../../css/l/la_bbw7rm.css';
import '../../css/s/sflfg-b2u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tkfxeb0-d"/><path class="la_bbw7rm"/><path class="sflfg-b2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-bottom-broken"} {...others} />);
}

export default Component;
