import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w572yib1x.css';
import '../../css/g/gxjgjdbta.css';
import '../../css/x/xxpxg9m1v.css';
import '../../css/b/bkuym1bgn.css';
import '../../css/p/pn8s3o5vq.css';
import '../../css/l/l80-o94-l.css';
import '../../css/z/z04drlb1l.css';
import '../../css/h/h_mle3bjg.css';
import '../../css/g/gwxiyp3ts.css';
import '../../css/p/pp3wt2jfz.css';
import '../../css/r/rpckuac7x.css';
import '../../css/d/dq0oi9bhl.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="w572yib1x"/><path class="gxjgjdbta"/><path class="xxpxg9m1v"/><path class="bkuym1bgn"/><path class="pn8s3o5vq"/><path class="l80-o94-l"/><g class="z04drlb1l"><path class="h_mle3bjg"/><path class="gwxiyp3ts"/><path class="pp3wt2jfz"/><path class="rpckuac7x"/><path class="dq0oi9bhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:carousel-horse"} {...others} />);
}

export default Component;
