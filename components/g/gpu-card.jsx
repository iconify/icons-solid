import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w72bdvb0k.css';
import '../../css/g/g25dc96pw.css';
import '../../css/v/v0vrbn7az.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="w72bdvb0k"/><path class="g25dc96pw"/><path class="v0vrbn7az"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:gpu-card"} {...others} />);
}

export default Component;
