import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cf32ksbqs.css';
import '../../css/b/bom-c3hbm.css';
import '../../css/n/nuk7_1b8b.css';
import '../../css/j/jd6p_sb6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="cf32ksbqs wm-shadow"/><path class="bom-c3hbm wm-shadow"/><path class="nuk7_1b8b"/><path class="jd6p_sb6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:shirt"} {...others} />);
}

export default Component;
