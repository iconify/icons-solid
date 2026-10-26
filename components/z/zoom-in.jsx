import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/s/s5p35abnm.css';
import '../../css/u/ua2ho9bjf.css';
import '../../css/z/zv3mzcbgi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="s5p35abnm"/><path class="ua2ho9bjf"/><path class="zv3mzcbgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:zoom-in"} {...others} />);
}

export default Component;
