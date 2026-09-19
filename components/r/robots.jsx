import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulra56alq.css';
import '../../css/a/aw14a30if.css';
import '../../css/y/yr_1obcsc.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ulra56alq"><path class="aw14a30if"/><path class="yr_1obcsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:robots"} {...others} />);
}

export default Component;
