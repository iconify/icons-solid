import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kgjo_eblc.css';
import '../../css/j/jxu9mpkpl.css';
import '../../css/k/kncuc7bda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kgjo_eblc"/><path class="jxu9mpkpl"/><path class="kncuc7bda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:zap-off"} {...others} />);
}

export default Component;
