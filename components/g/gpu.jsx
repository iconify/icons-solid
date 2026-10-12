import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hrl6_-iau.css';
import '../../css/a/a2bmogkbv.css';
import '../../css/s/s3ylp1agq.css';
import '../../css/x/xuz9flbot.css';
import '../../css/p/pu_hy_a8v.css';
import '../../css/i/ifdqtj_4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hrl6_-iau"/><path class="a2bmogkbv"/><circle class="s3ylp1agq"/><path class="xuz9flbot"/><path class="pu_hy_a8v"/><path class="ifdqtj_4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:gpu"} {...others} />);
}

export default Component;
