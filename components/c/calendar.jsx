import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hxrep1phr.css';
import '../../css/o/odkqjcchh.css';
import '../../css/u/uq5fhnb9e.css';
import '../../css/c/cxfni2ljt.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hxrep1phr"/><circle class="odkqjcchh"/><circle class="uq5fhnb9e"/><circle class="cxfni2ljt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:calendar"} {...others} />);
}

export default Component;
