import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o-fzp5bpo.css';
import '../../css/d/dwj_pubuj.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="o-fzp5bpo"/><path class="dwj_pubuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:eye-closed"} {...others} />);
}

export default Component;
