import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/l/lu90d1baq.css';
import '../../css/c/cp3cgcbyu.css';
import '../../css/p/pzz88hb1t.css';
import '../../css/y/yz0-4dmpa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="lu90d1baq"/><path class="cp3cgcbyu"/><path class="pzz88hb1t"/><path class="yz0-4dmpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:one-handed-holding-tablet-handheld"} {...others} />);
}

export default Component;
