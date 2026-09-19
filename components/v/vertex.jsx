import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zgz-fkb1z.css';
import '../../css/i/i350nbclg.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="zgz-fkb1z"/><path class="i350nbclg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:vertex"} {...others} />);
}

export default Component;
