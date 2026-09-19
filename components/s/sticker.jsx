import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k5rguyb7k.css';
import '../../css/a/a8wfs5bsi.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="k5rguyb7k"/><path class="a8wfs5bsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:sticker"} {...others} />);
}

export default Component;
