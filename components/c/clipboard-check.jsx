import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fsk4bfdbc.css';
import '../../css/l/l2zp-wr5l.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="fsk4bfdbc"/><path clip-rule="evenodd" class="l2zp-wr5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:clipboard-check"} {...others} />);
}

export default Component;
