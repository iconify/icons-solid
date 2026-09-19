import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pxx4wccbo.css';
import '../../css/c/clqbwcczo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pxx4wccbo"/><path class="clqbwcczo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:x-variable"} {...others} />);
}

export default Component;
