import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v61t93bzx.css';
import '../../css/y/yxz7n2ipb.css';
import '../../css/s/siob3cbvz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="v61t93bzx"/><path clip-rule="evenodd" class="yxz7n2ipb"/><path clip-rule="evenodd" class="siob3cbvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:woozy"} {...others} />);
}

export default Component;
