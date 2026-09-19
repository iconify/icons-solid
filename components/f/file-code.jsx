import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/egneazb5l.css';
import '../../css/z/zfmnccc8g.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="egneazb5l"/><path class="zfmnccc8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:file-code"} {...others} />);
}

export default Component;
