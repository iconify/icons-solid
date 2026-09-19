import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d_q81acmi.css';
import '../../css/x/xykmkmb9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d_q81acmi"/><path class="xykmkmb9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-concert"} {...others} />);
}

export default Component;
