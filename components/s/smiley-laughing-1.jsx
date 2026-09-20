import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/d/d2uxmvbho.css';
import '../../css/x/xodvb3hwp.css';
import '../../css/o/ormb2nb4l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="d2uxmvbho"/><path class="xodvb3hwp"/><path class="ormb2nb4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:smiley-laughing-1"} {...others} />);
}

export default Component;
