import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/v/v-8u4ibpv.css';
import '../../css/k/kpeyjbcps.css';
import '../../css/y/y40rqnbbe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="v-8u4ibpv"/><path class="kpeyjbcps"/><path class="y40rqnbbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:horse-zodiac"} {...others} />);
}

export default Component;
