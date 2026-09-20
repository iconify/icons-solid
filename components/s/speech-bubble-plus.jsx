import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qhtj4_b-m.css';
import '../../css/d/d6rnawmui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qhtj4_b-m"/><path class="d6rnawmui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:speech-bubble-plus"} {...others} />);
}

export default Component;
