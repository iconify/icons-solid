import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/r/r0ltr1bgi.css';
import '../../css/w/wkpjg4h8o.css';
import '../../css/v/v7_8tb8ig.css';
import '../../css/r/riryhhbue.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="r0ltr1bgi"/><path class="wkpjg4h8o"/><path class="v7_8tb8ig"/><path class="riryhhbue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:lit-dark"} {...others} />);
}

export default Component;
