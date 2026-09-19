import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/y/yy8pr83np.css';
import '../../css/v/vhhxkzb1a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="yy8pr83np"/><path class="vhhxkzb1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:flask"} {...others} />);
}

export default Component;
