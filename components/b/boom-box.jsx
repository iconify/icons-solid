import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cq3t79bqd.css';
import '../../css/v/vj_1li4id.css';
import '../../css/k/k0tkchp-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="cq3t79bqd"/><circle class="vj_1li4id"/><path class="k0tkchp-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:boom-box"} {...others} />);
}

export default Component;
