import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kvfik_buy.css';
import '../../css/t/t94t6tb6s.css';
import '../../css/x/xnad6_1zh.css';
import '../../css/n/nols4abef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="kvfik_buy"/><path class="t94t6tb6s"/><path class="xnad6_1zh"/><path class="nols4abef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:cam-web"} {...others} />);
}

export default Component;
