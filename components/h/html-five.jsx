import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/b/b067o7r5w.css';
import '../../css/n/n7j7xwbnn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="b067o7r5w"/><path class="n7j7xwbnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:html-five"} {...others} />);
}

export default Component;
