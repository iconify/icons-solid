import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/idqwhrbft.css';
import '../../css/k/kd3dk6bth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="idqwhrbft"/><path clip-rule="evenodd" class="kd3dk6bth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:nrksuper-avatar-expressive"} {...others} />);
}

export default Component;
