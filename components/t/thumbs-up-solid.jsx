import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hrjjki0eb.css';
import '../../css/q/qo8-3w2nr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hrjjki0eb"/><path clip-rule="evenodd" class="qo8-3w2nr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:thumbs-up-solid"} {...others} />);
}

export default Component;
