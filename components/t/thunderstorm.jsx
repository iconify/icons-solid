import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ok2lnz2ds.css';
import '../../css/u/utah8xten.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="ok2lnz2ds"/><path class="utah8xten"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:thunderstorm"} {...others} />);
}

export default Component;
