import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ug--vacuy.css';
import '../../css/e/eisd4xo_m.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="cuyn6tgcc"><path class="ug--vacuy"/><path class="eisd4xo_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:monitoring"} {...others} />);
}

export default Component;
