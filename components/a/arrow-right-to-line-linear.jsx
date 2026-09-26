import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tgvfhnabb.css';
import '../../css/u/ue8ht3b0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tgvfhnabb"/><path class="ue8ht3b0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-right-to-line-linear"} {...others} />);
}

export default Component;
