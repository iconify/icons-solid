import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vce15nbkf.css';
import '../../css/n/nxyeq8w_t.css';
import '../../css/r/r4ng58brp.css';
import '../../css/x/x6upp__hb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vce15nbkf"/><path class="nxyeq8w_t"/><path class="r4ng58brp"/><path class="x6upp__hb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mask-sad-broken"} {...others} />);
}

export default Component;
