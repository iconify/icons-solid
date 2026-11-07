import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/s/so69kfbvn.css';
import '../../css/r/r-gkmf7ya.css';
import '../../css/u/uy05j786l.css';
import '../../css/s/sd2r_1bbc.css';
import '../../css/k/kd20b6_5n.css';
import '../../css/w/wbw_ixbrw.css';
import '../../css/y/yad62e0rw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="so69kfbvn"/><path class="r-gkmf7ya"/><path class="uy05j786l"/><path class="sd2r_1bbc"/><path class="kd20b6_5n"/><path class="wbw_ixbrw"/><ellipse class="yad62e0rw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:face-scan-circle-line-duotone"} {...others} />);
}

export default Component;
