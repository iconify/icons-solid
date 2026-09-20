import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gxfzg3ajy.css';
import '../../css/x/xuod9ccmn.css';
import '../../css/z/znudi822w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gxfzg3ajy"/><path class="xuod9ccmn"/><path clip-rule="evenodd" class="znudi822w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:station2-filled"} {...others} />);
}

export default Component;
