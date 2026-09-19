import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/a/ajlllcbua.css';
import '../../css/j/jxty_9oem.css';
import '../../css/i/iaaudwpwy.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="nv9qcacyl"><path class="ajlllcbua"/><path class="jxty_9oem"/><path class="iaaudwpwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ro-4x3"} {...others} />);
}

export default Component;
