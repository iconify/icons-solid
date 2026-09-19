import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/savzzqkcr.css';
import '../../css/m/m51ssub5f.css';
import '../../css/x/xg046ujlu.css';
import '../../css/u/uxe2iccbg.css';
import '../../css/l/ltlzptgaz.css';
import '../../css/m/mji4icz4n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="savzzqkcr"/><path class="m51ssub5f"/><path class="xg046ujlu"/><path class="uxe2iccbg"/><path class="ltlzptgaz"/><path class="mji4icz4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:oncomingbus"} {...others} />);
}

export default Component;
