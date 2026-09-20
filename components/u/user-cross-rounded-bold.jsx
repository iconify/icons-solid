import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xcdofucup.css';
import '../../css/i/ice63qb1t.css';
import '../../css/c/c_zdt_bqs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xcdofucup"/><path class="ice63qb1t"/><path class="c_zdt_bqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-cross-rounded-bold"} {...others} />);
}

export default Component;
