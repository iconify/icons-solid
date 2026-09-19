import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jdvg7ibyp.css';
import '../../css/n/nvvquibjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jdvg7ibyp"/><path class="nvvquibjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:laurel-wreath-01"} {...others} />);
}

export default Component;
