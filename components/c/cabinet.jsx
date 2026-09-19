import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t0am5dblx.css';
import '../../css/x/x6-4_dbkf.css';
import '../../css/u/uu9hmksll.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="bi12bsetm"><path class="t0am5dblx"/><path class="x6-4_dbkf"/><path class="uu9hmksll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:cabinet"} {...others} />);
}

export default Component;
