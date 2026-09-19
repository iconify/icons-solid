import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/na8jb0axz.css';
import '../../css/m/mx6q5eb8b.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="na8jb0axz"/><path class="mx6q5eb8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:database-lock"} {...others} />);
}

export default Component;
