import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gasfqu__j.css';
import '../../css/w/wttt-oqxa.css';
import '../../css/q/q81bn74-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gasfqu__j"/><path clip-rule="evenodd" class="wttt-oqxa"/><path class="q81bn74-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:image-stack-expressive"} {...others} />);
}

export default Component;
