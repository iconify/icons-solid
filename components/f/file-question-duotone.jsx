import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dqhsfcyvd.css';
import '../../css/k/ks-c3nb6t.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="dqhsfcyvd"/><path class="ks-c3nb6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:file-question-duotone"} {...others} />);
}

export default Component;
