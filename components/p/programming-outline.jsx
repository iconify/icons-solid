import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eyh5gf8py.css';
import '../../css/k/ke227gbwo.css';
import '../../css/k/k9825nbyc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="eyh5gf8py"/><path class="ke227gbwo"/><path clip-rule="evenodd" class="k9825nbyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:programming-outline"} {...others} />);
}

export default Component;
