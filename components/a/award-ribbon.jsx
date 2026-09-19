import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b32gx1bhh.css';
import '../../css/g/g2c0nzb8c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="b32gx1bhh"/><path clip-rule="evenodd" class="g2c0nzb8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:award-ribbon"} {...others} />);
}

export default Component;
