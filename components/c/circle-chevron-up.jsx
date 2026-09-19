import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y1_mtyflw.css';
import '../../css/c/cte7j3b3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y1_mtyflw"/><path class="cte7j3b3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:circle-chevron-up"} {...others} />);
}

export default Component;
