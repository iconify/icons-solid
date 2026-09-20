import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dyanzub4e.css';
import '../../css/u/udx94hb3b.css';
import '../../css/o/oenk4v16u.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="dyanzub4e"/><path class="udx94hb3b"/><path class="oenk4v16u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:css"} {...others} />);
}

export default Component;
