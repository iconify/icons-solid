import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k_yiewv3x.css';
import '../../css/s/sc2cd5irh.css';
import '../../css/z/ztf146bah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k_yiewv3x"/><path class="sc2cd5irh"/><path class="ztf146bah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:shopping-bag-duotone"} {...others} />);
}

export default Component;
