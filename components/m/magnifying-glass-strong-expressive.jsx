import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m9nejwh1b.css';
import '../../css/p/pu4dtwbpm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="m9nejwh1b"/><path clip-rule="evenodd" class="pu4dtwbpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:magnifying-glass-strong-expressive"} {...others} />);
}

export default Component;
