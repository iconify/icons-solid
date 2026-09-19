import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/go_9e8b3f.css';
import '../../css/e/e8m0yn0tu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="go_9e8b3f"/><path class="e8m0yn0tu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:cloud-with-lightning"} {...others} />);
}

export default Component;
