import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lnsm5kdaf.css';
import '../../css/c/c9yhn8fgx.css';
import '../../css/r/ru576oa1k.css';
import '../../css/x/x_u2gpj0m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="lnsm5kdaf"/><path class="c9yhn8fgx"/><path clip-rule="evenodd" class="ru576oa1k"/><path class="x_u2gpj0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-rh-p"} {...others} />);
}

export default Component;
