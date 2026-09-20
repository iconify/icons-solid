import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/g/grxwkbb-g.css';
import '../../css/u/uyc8jvbul.css';
import '../../css/t/taun3cbga.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="grxwkbb-g"/><path class="uyc8jvbul"/><path class="taun3cbga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:mail-notification"} {...others} />);
}

export default Component;
