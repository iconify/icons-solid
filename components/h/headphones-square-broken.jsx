import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vl29rkbfs.css';
import '../../css/i/i2q3oaceu.css';
import '../../css/w/wvwojyb1o.css';
import '../../css/g/gss1pq6sj.css';
import '../../css/x/x4tkz9bbr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vl29rkbfs"/><path class="i2q3oaceu"/><path class="wvwojyb1o"/><path class="gss1pq6sj"/><path class="x4tkz9bbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:headphones-square-broken"} {...others} />);
}

export default Component;
