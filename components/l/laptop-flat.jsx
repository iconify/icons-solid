import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p3rj_7bou.css';
import '../../css/r/rnqo7acni.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="p3rj_7bou"/><path class="rnqo7acni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:laptop-flat"} {...others} />);
}

export default Component;
