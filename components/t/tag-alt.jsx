import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/vrcs43bej.css';
import '../../css/n/nztxrfbmp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="vrcs43bej"/><path class="nztxrfbmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:tag-alt"} {...others} />);
}

export default Component;
