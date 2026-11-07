import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wbicn6byt.css';
import '../../css/x/xk8carhdz.css';
import '../../css/a/al7cw8y0q.css';
import '../../css/d/d9cgzhbuf.css';
import '../../css/s/sdzmkabql.css';
import '../../css/w/wzjs11h7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wbicn6byt"/><path class="xk8carhdz"/><path class="al7cw8y0q"/><path class="d9cgzhbuf"/><path class="sdzmkabql"/><path class="wzjs11h7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:jar-of-pills-2-broken"} {...others} />);
}

export default Component;
