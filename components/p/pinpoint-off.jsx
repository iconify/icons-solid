import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c17l0cbmj.css';
import '../../css/j/jmpl9nzbh.css';
import '../../css/n/n_-73ibvy.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="c17l0cbmj"/><path clip-rule="evenodd" class="jmpl9nzbh"/><path clip-rule="evenodd" class="n_-73ibvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:pinpoint-off"} {...others} />);
}

export default Component;
