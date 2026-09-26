import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uq5b_xz-a.css';
import '../../css/l/l786eyrol.css';
import '../../css/f/fw0as8zpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="uq5b_xz-a"/><path class="l786eyrol"/><path class="fw0as8zpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layout-freeform-bold-duotone"} {...others} />);
}

export default Component;
