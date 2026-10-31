import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/maxwkmbcq.css';
import '../../css/e/ef254wjso.css';
import '../../css/n/nogr2634v.css';
import '../../css/g/gvw3uib4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="maxwkmbcq wm-shadow"/><path class="ef254wjso wm-shadow"/><path class="nogr2634v"/><path class="gvw3uib4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:scan-search"} {...others} />);
}

export default Component;
