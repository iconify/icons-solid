import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/y4x-jip2w.css';
import '../../css/p/px4b74b8x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="y4x-jip2w"/><path class="px4b74b8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:sofa"} {...others} />);
}

export default Component;
