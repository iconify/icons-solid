import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5-nrgbng.css';
import '../../css/b/ba8s7xqet.css';
import '../../css/s/sol1y4bnl.css';
import '../../css/f/fen_0-bev.css';
import '../../css/h/hg6-mnypd.css';
import '../../css/q/q2gjsubxc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e5-nrgbng"/><circle class="ba8s7xqet"/><path class="sol1y4bnl"/><circle class="fen_0-bev"/><path class="hg6-mnypd"/><rect transform="rotate(-67.56 15.32 7.16)" class="q2gjsubxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:golf"} {...others} />);
}

export default Component;
