import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkw-acq1l.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/z/zg-4--vku.css';
import '../../css/a/a2wbsbc0p.css';
import '../../css/o/oqr0tl9mz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkw-acq1l"/><g class="rpvb-o6bq"><path class="zg-4--vku"/><path class="a2wbsbc0p"/><path class="oqr0tl9mz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:wind-face"} {...others} />);
}

export default Component;
