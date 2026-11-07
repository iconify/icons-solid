import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay6nt709p.css';
import '../../css/g/g-7dejhie.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/w/w9-67fbcg.css';
import '../../css/n/nariwduko.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ay6nt709p"/><path clip-rule="evenodd" class="g-7dejhie"/><g class="xtpeb-edw"><path class="w9-67fbcg"/><path class="nariwduko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:album-bold-duotone"} {...others} />);
}

export default Component;
