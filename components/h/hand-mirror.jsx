import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l6jf2pb1x.css';
import '../../css/h/h2-tmbcxj.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="l6jf2pb1x"/><path class="h2-tmbcxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:hand-mirror"} {...others} />);
}

export default Component;
