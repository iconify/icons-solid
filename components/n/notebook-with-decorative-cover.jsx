import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x1dnrtggq.css';
import '../../css/j/jbbfs_85r.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="x1dnrtggq"/><path class="jbbfs_85r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:notebook-with-decorative-cover"} {...others} />);
}

export default Component;
