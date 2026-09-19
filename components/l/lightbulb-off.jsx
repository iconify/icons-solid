import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nd-n99b9d.css';
import '../../css/a/a5l3e4bsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nd-n99b9d"/><path class="a5l3e4bsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lightbulb-off"} {...others} />);
}

export default Component;
