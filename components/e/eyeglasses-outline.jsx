import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t2k-17biz.css';
import '../../css/c/czp-3jxtt.css';
import '../../css/g/gdryfccos.css';
import '../../css/o/oxtw1expr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="t2k-17biz"/><path clip-rule="evenodd" class="czp-3jxtt"/><path clip-rule="evenodd" class="gdryfccos"/><path class="oxtw1expr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:eyeglasses-outline"} {...others} />);
}

export default Component;
