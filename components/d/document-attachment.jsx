import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lansq9-ym.css';
import '../../css/j/jvg7j_b2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lansq9-ym"/><path class="jvg7j_b2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:document-attachment"} {...others} />);
}

export default Component;
