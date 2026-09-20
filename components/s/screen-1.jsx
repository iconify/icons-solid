import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/b/b1mom6sfl.css';
import '../../css/i/i9yzzxiub.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="b1mom6sfl"/><path class="i9yzzxiub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:screen-1"} {...others} />);
}

export default Component;
