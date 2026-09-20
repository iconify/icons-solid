import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvw30zhji.css';
import '../../css/r/rpm6pjbrs.css';
import '../../css/y/y4d60-b-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kvw30zhji"/><path class="rpm6pjbrs"/><path clip-rule="evenodd" class="y4d60-b-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:station-filled"} {...others} />);
}

export default Component;
