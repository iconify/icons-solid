import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mqs-w65-h.css';
import '../../css/o/o7m9e7b2j.css';
import '../../css/t/tldp9ccxd.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="mqs-w65-h"/><path class="o7m9e7b2j"/><path class="tldp9ccxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:td-4x3"} {...others} />);
}

export default Component;
