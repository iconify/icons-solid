import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a4zastb7e.css';
import '../../css/p/pr1d3tb7j.css';
import '../../css/r/ri8jlr4rm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="a4zastb7e"/><path class="pr1d3tb7j"/><path class="ri8jlr4rm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:folder-lock"} {...others} />);
}

export default Component;
