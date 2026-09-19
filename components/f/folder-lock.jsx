import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ageny807r.css';
import '../../css/k/khziu2zaz.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="ageny807r"/><path class="khziu2zaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:folder-lock"} {...others} />);
}

export default Component;
