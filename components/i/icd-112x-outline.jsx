import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/meo0i6kkk.css';
import '../../css/x/xsg7zu72j.css';
import '../../css/h/hsytook5g.css';
import '../../css/v/vfc_tmbcn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="meo0i6kkk"/><path clip-rule="evenodd" class="xsg7zu72j"/><path class="hsytook5g"/><path clip-rule="evenodd" class="vfc_tmbcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:icd-112x-outline"} {...others} />);
}

export default Component;
