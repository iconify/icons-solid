import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/w/w0obfdexd.css';
import '../../css/e/e2logi1tl.css';
import '../../css/v/vt298ccbo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="w0obfdexd"/><path class="e2logi1tl"/><path class="vt298ccbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:yin-yang-symbol"} {...others} />);
}

export default Component;
