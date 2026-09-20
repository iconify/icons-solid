import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/u/u7mrhmbbw.css';
import '../../css/y/y3fy76l-v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="u7mrhmbbw"/><path class="y3fy76l-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:button-play-circle"} {...others} />);
}

export default Component;
