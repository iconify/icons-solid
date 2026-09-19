import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n5u5o1ykq.css';
import '../../css/l/lonii6b0k.css';
import '../../css/a/a7hds4b4p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="n5u5o1ykq"/><path clip-rule="evenodd" class="lonii6b0k"/><path clip-rule="evenodd" class="a7hds4b4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:travel-alt"} {...others} />);
}

export default Component;
