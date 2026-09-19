import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y5740ttdk.css';
import '../../css/y/y40ejmb1p.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="y5740ttdk"/><path class="y40ejmb1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:calendar-date-fill"} {...others} />);
}

export default Component;
