import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z4t6-ibdt.css';
import '../../css/y/ywqmrebdw.css';
import '../../css/x/xxzrkjbgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z4t6-ibdt"/><path clip-rule="evenodd" class="ywqmrebdw"/><path class="xxzrkjbgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-wide-bold"} {...others} />);
}

export default Component;
