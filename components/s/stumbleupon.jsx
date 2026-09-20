import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zafm_pb1a.css';
import '../../css/i/i0otw5b8v.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-4.5};
const content = `<g class="cuyn6tgcc"><path class="zafm_pb1a"/><path class="i0otw5b8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:stumbleupon"} {...others} />);
}

export default Component;
