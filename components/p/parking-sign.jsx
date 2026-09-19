import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ue_al4hoa.css';
import '../../css/u/u05je9dcy.css';
import '../../css/i/i8tckab1e.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="ue_al4hoa"/><path class="u05je9dcy"/><path class="i8tckab1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:parking-sign"} {...others} />);
}

export default Component;
