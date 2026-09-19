import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/xgsp0_xbv.css';
import '../../css/y/yh9aznjrg.css';
import '../../css/v/vvteiwlre.css';
import '../../css/e/ede3shbbu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="xgsp0_xbv"/><path class="yh9aznjrg"/><path class="vvteiwlre"/><path class="ede3shbbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cookie"} {...others} />);
}

export default Component;
