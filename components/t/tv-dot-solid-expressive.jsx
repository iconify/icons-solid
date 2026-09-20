import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zo5egx-xg.css';
import '../../css/h/h4xg-bczi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zo5egx-xg"/><path clip-rule="evenodd" class="h4xg-bczi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:tv-dot-solid-expressive"} {...others} />);
}

export default Component;
