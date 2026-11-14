import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e7ppz5bmi.css';
import '../../css/j/jj4vdyulo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e7ppz5bmi"/><path class="jj4vdyulo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-computer"} {...others} />);
}

export default Component;
