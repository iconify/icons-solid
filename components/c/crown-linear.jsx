import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i1og6obge.css';
import '../../css/g/gjnqambaa.css';
import '../../css/m/myrt-acvb.css';
import '../../css/h/h-8szej4p.css';
import '../../css/z/zfv0jff-m.css';
import '../../css/o/okwt3swec.css';
import '../../css/v/vnjc76_8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="i1og6obge"/><path class="gjnqambaa"/><path class="myrt-acvb"/><path class="h-8szej4p"/><path class="zfv0jff-m"/><path class="okwt3swec"/><path class="vnjc76_8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:crown-linear"} {...others} />);
}

export default Component;
