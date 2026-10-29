import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nmsgmhcct.css';
import '../../css/w/wr92o1bsm.css';
import '../../css/o/oclzl8_2c.css';
import '../../css/x/xa3jgydgh.css';
import '../../css/g/gegxv6bxv.css';
import '../../css/t/th_a6tbod.css';
import '../../css/h/h5y_s3bwi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="nmsgmhcct wm-deco"/><path class="wm-deco wr92o1bsm"/><path class="oclzl8_2c wm-k"/><path class="wm-a xa3jgydgh"/><path class="gegxv6bxv wm-s"/><path class="th_a6tbod wm-k"/><path class="h5y_s3bwi wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heading-2-blueprint"} {...others} />);
}

export default Component;
