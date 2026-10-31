import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w75-t3t6a.css';
import '../../css/n/ncvrrob_j.css';
import '../../css/j/jx5h_ob3s.css';
import '../../css/y/yc_5pub0i.css';
import '../../css/r/rkfvwvb5b.css';
import '../../css/j/jyyhf2kxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="w75-t3t6a wm-shadow"/><path class="ncvrrob_j"/><path class="jx5h_ob3s"/><path class="yc_5pub0i"/><path class="rkfvwvb5b"/><path class="jyyhf2kxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:traffic-cone"} {...others} />);
}

export default Component;
