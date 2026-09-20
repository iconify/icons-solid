import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lt5_hsoex.css';
import '../../css/x/xk8carhdz.css';
import '../../css/a/al7cw8y0q.css';
import '../../css/a/aqvyvrgse.css';
import '../../css/s/sdzmkabql.css';
import '../../css/r/rquypmbxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lt5_hsoex"/><path class="xk8carhdz"/><path class="al7cw8y0q"/><path class="aqvyvrgse"/><path class="sdzmkabql"/><path class="rquypmbxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:jar-of-pills-2-broken"} {...others} />);
}

export default Component;
