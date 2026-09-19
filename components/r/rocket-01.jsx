import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kt8b88eid.css';
import '../../css/p/pkcfdfbtu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kt8b88eid"/><path class="pkcfdfbtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:rocket-01"} {...others} />);
}

export default Component;
