import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rjniznbww.css';
import '../../css/m/mpbp0mbip.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="rjniznbww"/><path clip-rule="evenodd" class="mpbp0mbip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:water-treatment2x-outline"} {...others} />);
}

export default Component;
