import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1818y12w.css';
import '../../css/z/zbf4nfbmn.css';
import '../../css/x/xjv1tcbaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a1818y12w"/><path class="zbf4nfbmn"/><path clip-rule="evenodd" class="xjv1tcbaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:virus-patient2x-outline"} {...others} />);
}

export default Component;
