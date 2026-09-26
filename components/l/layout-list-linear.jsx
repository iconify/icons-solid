import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ecr98fbsm.css';
import '../../css/y/yn4ftnbvf.css';
import '../../css/m/mocjfac8k.css';
import '../../css/b/bv79nub_u.css';
import '../../css/z/zzoug-3hz.css';
import '../../css/j/jm1dfw2ei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ecr98fbsm"/><path class="yn4ftnbvf"/><path class="mocjfac8k"/><path class="bv79nub_u"/><path class="zzoug-3hz"/><path class="jm1dfw2ei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layout-list-linear"} {...others} />);
}

export default Component;
