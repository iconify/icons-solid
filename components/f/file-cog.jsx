import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/akk7aub-y.css';
import '../../css/r/rku94cw-v.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="akk7aub-y"/><path class="rku94cw-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:file-cog"} {...others} />);
}

export default Component;
