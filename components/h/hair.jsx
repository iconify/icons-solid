import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zjpoq8bet.css';
import '../../css/k/k6b2bbmqa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="zjpoq8bet"/><path class="k6b2bbmqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:hair"} {...others} />);
}

export default Component;
