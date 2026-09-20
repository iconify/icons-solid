import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z30ovoi1m.css';
import '../../css/k/koc0qqbys.css';
import '../../css/r/r-meexb3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z30ovoi1m"/><path class="koc0qqbys"/><path clip-rule="evenodd" class="r-meexb3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-5-outline"} {...others} />);
}

export default Component;
