import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rrh7cmb1u.css';
import '../../css/o/o2yzq1buu.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="rrh7cmb1u"/><path class="o2yzq1buu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:link"} {...others} />);
}

export default Component;
