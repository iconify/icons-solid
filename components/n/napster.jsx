import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wm8drcgux.css';
import '../../css/k/ktaey57-j.css';
import '../../css/z/zrfexjbsf.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<g class="cuyn6tgcc"><path class="wm8drcgux"/><path class="ktaey57-j"/><path class="zrfexjbsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:napster"} {...others} />);
}

export default Component;
