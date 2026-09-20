import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h21lhabjs.css';
import '../../css/j/j8kuw0sgj.css';
import '../../css/x/xvcvrib9a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h21lhabjs"/><path class="j8kuw0sgj"/><path class="xvcvrib9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sad-circle-outline"} {...others} />);
}

export default Component;
