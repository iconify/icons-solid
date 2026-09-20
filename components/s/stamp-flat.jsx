import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q6mn1sb9c.css';
import '../../css/y/y-xxp1b4p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="q6mn1sb9c"/><path class="y-xxp1b4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:stamp-flat"} {...others} />);
}

export default Component;
