import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/m/mhu7obblh.css';
import '../../css/g/gdq8k5bkt.css';
import '../../css/t/tkxhsebdi.css';
import '../../css/f/fmw-r6bwf.css';
import '../../css/h/h4clv62jm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="mhu7obblh"/><path class="gdq8k5bkt"/><path class="tkxhsebdi"/><path class="fmw-r6bwf"/><path class="h4clv62jm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:horse-zodiac"} {...others} />);
}

export default Component;
