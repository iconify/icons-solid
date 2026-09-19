import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ghjhw3b6v.css';
import '../../css/o/opopepb0m.css';
import '../../css/l/ljh670flx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="ghjhw3b6v"/><path clip-rule="evenodd" class="opopepb0m"/><path clip-rule="evenodd" class="ljh670flx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:medical-search"} {...others} />);
}

export default Component;
