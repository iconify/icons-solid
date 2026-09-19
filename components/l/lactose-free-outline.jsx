import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nkbistf8y.css';
import '../../css/p/p9fbmfymw.css';
import '../../css/c/c2sl7yebp.css';
import '../../css/m/m-wlajwqd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nkbistf8y"/><path clip-rule="evenodd" class="p9fbmfymw"/><path clip-rule="evenodd" class="c2sl7yebp"/><path class="m-wlajwqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:lactose-free-outline"} {...others} />);
}

export default Component;
