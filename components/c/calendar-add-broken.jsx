import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jgun0ccrs.css';
import '../../css/y/ytwl2ebtc.css';
import '../../css/r/rmwzjebkv.css';
import '../../css/u/ue-h37-nb.css';
import '../../css/t/tv6qiybum.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jgun0ccrs"/><path class="ytwl2ebtc"/><path class="rmwzjebkv"/><path class="ue-h37-nb"/><path class="tv6qiybum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:calendar-add-broken"} {...others} />);
}

export default Component;
