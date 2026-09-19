import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tgwhb0atj.css';
import '../../css/e/eedmhxbrq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="tgwhb0atj"/><path clip-rule="evenodd" class="eedmhxbrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:no-outline"} {...others} />);
}

export default Component;
