import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s1ni37r5k.css';
import '../../css/n/n890j_bju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="s1ni37r5k"/><path class="n890j_bju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:list-check"} {...others} />);
}

export default Component;
