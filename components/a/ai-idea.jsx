import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s4ncqk2_x.css';
import '../../css/j/jm2eyfcso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s4ncqk2_x"/><path class="jm2eyfcso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-idea"} {...others} />);
}

export default Component;
