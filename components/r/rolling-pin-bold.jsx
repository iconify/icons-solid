import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pmwvltbwu.css';
import '../../css/b/bso_8zbol.css';
import '../../css/c/cbkt77dxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pmwvltbwu"/><path class="bso_8zbol"/><path class="cbkt77dxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rolling-pin-bold"} {...others} />);
}

export default Component;
