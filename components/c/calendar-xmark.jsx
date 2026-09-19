import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sf0cvsbpo.css';
import '../../css/c/c07pplisr.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="sf0cvsbpo"/><path clip-rule="evenodd" class="c07pplisr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:calendar-xmark"} {...others} />);
}

export default Component;
