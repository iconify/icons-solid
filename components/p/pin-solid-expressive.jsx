import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r24kkipho.css';
import '../../css/z/zsx8s-bgq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="r24kkipho"/><path clip-rule="evenodd" class="zsx8s-bgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:pin-solid-expressive"} {...others} />);
}

export default Component;
