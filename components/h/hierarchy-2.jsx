import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/wglv4rb8q.css';
import '../../css/j/jdiji6lin.css';
import '../../css/u/urzpmveho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="wglv4rb8q"/><path class="jdiji6lin"/><path class="urzpmveho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:hierarchy-2"} {...others} />);
}

export default Component;
