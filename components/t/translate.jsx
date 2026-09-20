import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2yxeu0zr.css';
import '../../css/p/pcl6sgbda.css';
import '../../css/a/actkwtdjy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="n2yxeu0zr"/><path class="pcl6sgbda"/><path clip-rule="evenodd" class="actkwtdjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:translate"} {...others} />);
}

export default Component;
