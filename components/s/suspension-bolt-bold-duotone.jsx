import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucym07b5n.css';
import '../../css/h/hpp6ujt5x.css';
import '../../css/k/kroiddczm.css';
import '../../css/c/cfu0w31nz.css';
import '../../css/k/kuukv2b8k.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/u/ug1ixiawc.css';
import '../../css/h/hy1ur8bdq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ucym07b5n"/><path class="hpp6ujt5x"/><path class="kroiddczm"/><path class="cfu0w31nz"/><path class="kuukv2b8k"/><g class="xtpeb-edw"><path class="ug1ixiawc"/><path class="hy1ur8bdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suspension-bolt-bold-duotone"} {...others} />);
}

export default Component;
