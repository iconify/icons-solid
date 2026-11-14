import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rbz80rb1f.css';
import '../../css/f/fke_0j8nq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rbz80rb1f"/><path class="fke_0j8nq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:excavator"} {...others} />);
}

export default Component;
