import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bikni61mk.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/s/se2-_rn_v.css';
import '../../css/t/tsp104b7p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bikni61mk"/><g class="xtpeb-edw"><path class="se2-_rn_v"/><path class="tsp104b7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-fall-2-bold-duotone"} {...others} />);
}

export default Component;
