import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdcnc9bhs.css';
import '../../css/x/xi2u7tbob.css';
import '../../css/l/l5e0p_phe.css';
import '../../css/k/k695n280r.css';
import '../../css/s/skluiz_ci.css';
import '../../css/h/hmwfmm31g.css';

const viewBox = {"width":18.035,"height":17.5};
const content = `<path class="rdcnc9bhs"/><path class="xi2u7tbob"/><path class="l5e0p_phe"/><path class="k695n280r"/><path class="skluiz_ci"/><path class="hmwfmm31g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"k8s:replicaset"} {...others} />);
}

export default Component;
