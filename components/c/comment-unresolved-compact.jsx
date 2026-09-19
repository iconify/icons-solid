import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mlmxd1bpe.css';
import '../../css/l/lqsj7i-8f.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><path class="mlmxd1bpe"/><path class="lqsj7i-8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:comment-unresolved-compact"} {...others} />);
}

export default Component;
