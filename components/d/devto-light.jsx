import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvl2anbys.css';
import '../../css/u/u9x3iha9z.css';
import '../../css/x/x9lllibsv.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="pvl2anbys"/><path clip-rule="evenodd" class="u9x3iha9z"/><path class="x9lllibsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:devto-light"} {...others} />);
}

export default Component;
