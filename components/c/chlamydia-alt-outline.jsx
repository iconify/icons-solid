import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u3nro693m.css';
import '../../css/x/xvxzg_-bz.css';
import '../../css/b/b80cirbss.css';
import '../../css/r/r8sdp5bdc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="u3nro693m"/><path clip-rule="evenodd" class="xvxzg_-bz"/><path clip-rule="evenodd" class="b80cirbss"/><path class="r8sdp5bdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:chlamydia-alt-outline"} {...others} />);
}

export default Component;
