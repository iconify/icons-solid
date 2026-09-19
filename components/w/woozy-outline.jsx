import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u4ktaub7o.css';
import '../../css/s/svxw3cbgx.css';
import '../../css/y/yzptmubja.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u4ktaub7o"/><path class="svxw3cbgx"/><path clip-rule="evenodd" class="yzptmubja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:woozy-outline"} {...others} />);
}

export default Component;
