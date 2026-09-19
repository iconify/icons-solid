import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w--pu8a5q.css';
import '../../css/e/ev65tbb2y.css';
import '../../css/f/f5p-36bbw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="w--pu8a5q"/><path class="ev65tbb2y"/><path class="f5p-36bbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hotel-please-clean"} {...others} />);
}

export default Component;
