import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/og399p1rd.css';
import '../../css/u/uuaa4bcqw.css';
import '../../css/g/giwb81ztw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="og399p1rd wm-shadow"/><path class="uuaa4bcqw wm-shadow"/><path class="giwb81ztw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chart-scatter"} {...others} />);
}

export default Component;
