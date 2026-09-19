import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zk0wjn-dd.css';
import '../../css/y/yn8mhpbye.css';
import '../../css/p/p0qy-sbma.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="zk0wjn-dd"/><path class="yn8mhpbye"/><path class="p0qy-sbma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:dollar-bill-duo"} {...others} />);
}

export default Component;
