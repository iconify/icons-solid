import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aqpng0b0e.css';
import '../../css/n/ngqo40b8f.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="aqpng0b0e"/><path class="ngqo40b8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:folder-zip"} {...others} />);
}

export default Component;
