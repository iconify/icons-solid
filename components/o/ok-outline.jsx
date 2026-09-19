import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hobtoeb-y.css';
import '../../css/i/i5jeaub5q.css';
import '../../css/s/siob3cbvz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="hobtoeb-y"/><path clip-rule="evenodd" class="i5jeaub5q"/><path clip-rule="evenodd" class="siob3cbvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ok-outline"} {...others} />);
}

export default Component;
