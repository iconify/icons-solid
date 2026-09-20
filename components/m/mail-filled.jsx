import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sdxejchgi.css';
import '../../css/u/u0av0nb1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="sdxejchgi"/><path class="u0av0nb1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mail-filled"} {...others} />);
}

export default Component;
