import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j2x57wzht.css';
import '../../css/v/vw9spuo9g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="j2x57wzht"/><path clip-rule="evenodd" class="vw9spuo9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rdt-result-out-stock"} {...others} />);
}

export default Component;
