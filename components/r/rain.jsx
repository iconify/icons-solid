import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l9k9eab0w.css';
import '../../css/m/mgnqure8x.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="l9k9eab0w"/><path class="mgnqure8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:rain"} {...others} />);
}

export default Component;
