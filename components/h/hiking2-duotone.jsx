import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gro5h1bir.css';
import '../../css/e/ew18oib6k.css';
import '../../css/e/ez0_tuu0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gro5h1bir"/><path clip-rule="evenodd" class="ew18oib6k"/><path class="ez0_tuu0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:hiking2-duotone"} {...others} />);
}

export default Component;
