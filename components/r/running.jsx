import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nkj4d1bgu.css';
import '../../css/b/b7cnvjx-i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="nkj4d1bgu"/><path class="b7cnvjx-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:running"} {...others} />);
}

export default Component;
