import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/krmxiabxo.css';
import '../../css/i/i_x84lb6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="krmxiabxo"/><path class="i_x84lb6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:book-up2"} {...others} />);
}

export default Component;
