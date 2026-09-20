import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/zk5ywebkc.css';
import '../../css/i/i8qseac2m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="zk5ywebkc"/><path class="i8qseac2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:pacman"} {...others} />);
}

export default Component;
