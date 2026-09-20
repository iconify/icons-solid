import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wav1xkdjh.css';
import '../../css/t/tf72ed1st.css';
import '../../css/f/fbjdx1-lp.css';
import '../../css/l/luyusgb5r.css';
import '../../css/d/daztwab0l.css';
import '../../css/v/v2nd4czxt.css';
import '../../css/l/lbax72bay.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/l/lcjur1_7e.css';
import '../../css/k/k8q9zxhsz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wav1xkdjh"/><path class="tf72ed1st"/><path class="fbjdx1-lp"/><path class="luyusgb5r"/><path class="daztwab0l"/><path class="v2nd4czxt"/><path class="lbax72bay"/><g class="jn8qy4bru"><path class="lcjur1_7e"/><path class="k8q9zxhsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hot-springs"} {...others} />);
}

export default Component;
