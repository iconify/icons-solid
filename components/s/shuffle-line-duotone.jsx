import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j8004cbeu.css';
import '../../css/l/lywq3ibco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j8004cbeu"/><path class="lywq3ibco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shuffle-line-duotone"} {...others} />);
}

export default Component;
