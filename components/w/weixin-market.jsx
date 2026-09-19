import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/iau7cvb8h.css';
import '../../css/p/pw-9paarv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="iau7cvb8h"/><path class="pw-9paarv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:weixin-market"} {...others} />);
}

export default Component;
