import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mqi99kbug.css';
import '../../css/i/ib1iq7b9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mqi99kbug"/><path class="ib1iq7b9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-dna"} {...others} />);
}

export default Component;
