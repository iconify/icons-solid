import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d9fyp-bah.css';
import '../../css/e/euq09ab2w.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><path class="d9fyp-bah"/><path clip-rule="evenodd" class="euq09ab2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:copilot-compact"} {...others} />);
}

export default Component;
