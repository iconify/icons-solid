import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwm74fbmj.css';
import '../../css/z/zc2ucjbyd.css';
import '../../css/k/k-se3obxf.css';
import '../../css/c/c15xt_k1c.css';
import '../../css/f/f0vy_1blw.css';
import '../../css/w/wm4d2ub8k.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/b/bvbqu5bkf.css';
import '../../css/g/gkcqv1bzz.css';
import '../../css/c/c6bbqj82g.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="lwm74fbmj"/><path class="zc2ucjbyd"/><path class="k-se3obxf"/><path class="c15xt_k1c"/><path class="f0vy_1blw"/><path class="wm4d2ub8k"/><g class="rpvb-o6bq"><path class="bvbqu5bkf"/><path class="gkcqv1bzz"/><path class="c6bbqj82g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:postal-horn"} {...others} />);
}

export default Component;
