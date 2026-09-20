import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qjva00luf.css';
import '../../css/a/akmtuqbnt.css';
import '../../css/f/f39he8onf.css';
import '../../css/k/knpnsdbbr.css';
import '../../css/e/ez1x61b2a.css';
import '../../css/p/po0yeu5hs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qjva00luf"/><path class="akmtuqbnt"/><path class="f39he8onf"/><path class="knpnsdbbr"/><circle class="ez1x61b2a"/><path class="po0yeu5hs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:calendar-search-line-duotone"} {...others} />);
}

export default Component;
