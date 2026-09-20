import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e7_0qw30p.css';
import '../../css/i/i7_w7zo5m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="e7_0qw30p"/><path class="i7_w7zo5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:vapi"} {...others} />);
}

export default Component;
