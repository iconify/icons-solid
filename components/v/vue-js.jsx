import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vq_ekhekb.css';
import '../../css/i/iv3qn5boq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vq_ekhekb"/><path class="iv3qn5boq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:vue-js"} {...others} />);
}

export default Component;
