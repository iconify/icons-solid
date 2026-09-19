import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pz2-90rpl.css';
import '../../css/p/pf__zzs_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pz2-90rpl"/><path class="pf__zzs_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:touch-interaction-04"} {...others} />);
}

export default Component;
