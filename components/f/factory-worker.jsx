import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/evb69csbi.css';
import '../../css/c/cuh-8pbck.css';
import '../../css/b/bsvf9zbkb.css';
import '../../css/p/py64w2b0f.css';
import '../../css/e/eat55kb5m.css';
import '../../css/l/lf3mpuqwp.css';
import '../../css/n/nzniu0vwx.css';
import '../../css/z/zlve48bnn.css';
import '../../css/v/vk6miebkz.css';
import '../../css/h/h5fmpwb5m.css';
import '../../css/j/jojmehbzc.css';
import '../../css/a/ai4z7tcfj.css';
import '../../css/q/q_m-d01rm.css';
import '../../css/i/i5g43mb4v.css';
import '../../css/v/v3dvtcc-d.css';
import '../../css/m/md8pt2bck.css';
import '../../css/p/p8skklbrg.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="evb69csbi"/><path class="cuh-8pbck"/><path class="bsvf9zbkb"/><path class="py64w2b0f"/><path class="eat55kb5m"/><path class="lf3mpuqwp"/><path class="nzniu0vwx"/><path class="zlve48bnn"/><path class="vk6miebkz"/><path class="h5fmpwb5m"/><path class="jojmehbzc"/><path class="ai4z7tcfj"/><path class="q_m-d01rm"/><path class="i5g43mb4v"/><path class="v3dvtcc-d"/><path class="md8pt2bck"/><path class="p8skklbrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:factory-worker"} {...others} />);
}

export default Component;
