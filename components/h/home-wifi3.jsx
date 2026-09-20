import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aoru-1c7c.css';
import '../../css/x/xq1bxcbka.css';
import '../../css/z/z4_iucblp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="aoru-1c7c"/><path class="xq1bxcbka"/><path clip-rule="evenodd" class="z4_iucblp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:home-wifi3"} {...others} />);
}

export default Component;
