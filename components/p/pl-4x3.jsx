import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/damb695lr.css';
import '../../css/g/gwkoec6sp.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="damb695lr"/><path class="gwkoec6sp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:pl-4x3"} {...others} />);
}

export default Component;
