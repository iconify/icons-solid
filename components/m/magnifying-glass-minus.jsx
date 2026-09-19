import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fa_6u5a4y.css';
import '../../css/k/kytsveb0a.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="fa_6u5a4y"/><path clip-rule="evenodd" class="kytsveb0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:magnifying-glass-minus"} {...others} />);
}

export default Component;
