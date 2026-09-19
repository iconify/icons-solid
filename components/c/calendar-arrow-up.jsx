import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hf2g79b3c.css';
import '../../css/c/cub0dwbvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hf2g79b3c"/><path class="cub0dwbvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:calendar-arrow-up"} {...others} />);
}

export default Component;
