import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b1_fnmbnn.css';
import '../../css/r/rloqbnbld.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="b1_fnmbnn"/><path class="rloqbnbld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:list-plus-expressive"} {...others} />);
}

export default Component;
