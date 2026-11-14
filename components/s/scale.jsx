import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/facftvb6k.css';
import '../../css/u/u6ujmwbza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="facftvb6k"/><path class="u6ujmwbza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:scale"} {...others} />);
}

export default Component;
