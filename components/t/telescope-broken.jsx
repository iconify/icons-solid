import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gwb_4i1kc.css';
import '../../css/b/bl6ucdcay.css';
import '../../css/s/sqndjhubq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gwb_4i1kc"/><path class="bl6ucdcay"/><path class="sqndjhubq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:telescope-broken"} {...others} />);
}

export default Component;
