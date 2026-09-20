import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dfsvjbgyy.css';
import '../../css/m/mjaimm-ui.css';
import '../../css/x/x2-3lfqme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dfsvjbgyy"/><path class="mjaimm-ui"/><path class="x2-3lfqme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:flag-1"} {...others} />);
}

export default Component;
