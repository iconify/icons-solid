import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mwm6-xbgh.css';
import '../../css/v/vnjc76_8o.css';
import '../../css/i/i1og6obge.css';
import '../../css/m/myrt-acvb.css';
import '../../css/a/akwwjkb_a.css';
import '../../css/z/zfv0jff-m.css';
import '../../css/x/xhsqmdbch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mwm6-xbgh"/><path class="vnjc76_8o"/><path class="i1og6obge"/><path class="myrt-acvb"/><path class="akwwjkb_a"/><path class="zfv0jff-m"/><path class="xhsqmdbch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:crown-broken"} {...others} />);
}

export default Component;
