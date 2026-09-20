import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncq44p-wx.css';
import '../../css/o/op3opct7m.css';
import '../../css/h/hftreccgd.css';
import '../../css/a/a0hdqrbyg.css';
import '../../css/r/rr898ub2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ncq44p-wx"/><path class="op3opct7m"/><path class="hftreccgd"/><path class="a0hdqrbyg"/><path class="rr898ub2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:play-media-video-hexagon"} {...others} />);
}

export default Component;
