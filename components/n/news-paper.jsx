import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/b/b9z7cudnn.css';
import '../../css/b/bpy02gbfv.css';
import '../../css/g/g283zub3h.css';
import '../../css/a/a3ajfwrrx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="b9z7cudnn"/><path class="bpy02gbfv"/><path class="g283zub3h"/><path class="a3ajfwrrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:news-paper"} {...others} />);
}

export default Component;
