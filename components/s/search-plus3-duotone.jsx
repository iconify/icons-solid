import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mdb-6xbip.css';
import '../../css/w/wf82r5bjl.css';
import '../../css/y/yjr_673tk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mdb-6xbip"/><path class="wf82r5bjl"/><path clip-rule="evenodd" class="yjr_673tk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:search-plus3-duotone"} {...others} />);
}

export default Component;
