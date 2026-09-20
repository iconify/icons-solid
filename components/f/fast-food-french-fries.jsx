import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uvet22g_h.css';
import '../../css/r/r1o48umgg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uvet22g_h"/><path class="r1o48umgg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:fast-food-french-fries"} {...others} />);
}

export default Component;
