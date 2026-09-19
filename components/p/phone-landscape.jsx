import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q0vm0pw9t.css';
import '../../css/x/x42_8jb4z.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="q0vm0pw9t"/><path class="x42_8jb4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:phone-landscape"} {...others} />);
}

export default Component;
