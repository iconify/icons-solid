import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s2y8k13rd.css';
import '../../css/f/flcm0z1gr.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="s2y8k13rd"/><path class="flcm0z1gr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:plant-pot"} {...others} />);
}

export default Component;
