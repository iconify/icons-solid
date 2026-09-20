import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ll5llmbnt.css';
import '../../css/z/zxy27fbig.css';
import '../../css/n/n0a5s9b9n.css';
import '../../css/c/cutecebju.css';
import '../../css/k/ke7t7jbqv.css';
import '../../css/a/aio933bbm.css';
import '../../css/x/xu3oo0bsb.css';
import '../../css/d/dxu82pbyh.css';
import '../../css/l/l7ipk1bgg.css';
import '../../css/n/n4rpjbjvm.css';
import '../../css/q/qpn4pfb9z.css';
import '../../css/l/lwi6bvbnh.css';
import '../../css/k/ki0kyse1q.css';
import '../../css/a/asovlkg7c.css';
import '../../css/s/swij1xb3r.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ll5llmbnt"/><circle class="zxy27fbig"/><path class="n0a5s9b9n"/><path class="cutecebju"/><path class="ke7t7jbqv"/><path class="aio933bbm"/><path class="xu3oo0bsb"/><path class="dxu82pbyh"/><path class="l7ipk1bgg"/><path class="n4rpjbjvm"/><path class="qpn4pfb9z"/><path class="lwi6bvbnh"/><path class="ki0kyse1q"/><path class="asovlkg7c"/><path class="swij1xb3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:male-doctor"} {...others} />);
}

export default Component;
