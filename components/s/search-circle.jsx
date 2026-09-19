import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f9k35acuj.css';
import '../../css/b/brz6b8rhb.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="f9k35acuj"/><path clip-rule="evenodd" class="brz6b8rhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:search-circle"} {...others} />);
}

export default Component;
