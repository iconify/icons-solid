import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r3f1iwbil.css';
import '../../css/x/xd7zhlbhl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="r3f1iwbil"/><path class="xd7zhlbhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:square-and-arrow-up-expressive"} {...others} />);
}

export default Component;
