import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kf0_gw6sp.css';
import '../../css/g/g23mak7rg.css';
import '../../css/j/jgbdxybfl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kf0_gw6sp"/><path clip-rule="evenodd" class="g23mak7rg"/><path class="jgbdxybfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sun2-duotone"} {...others} />);
}

export default Component;
