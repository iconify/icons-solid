import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lezjbfb4s.css';
import '../../css/m/mauff2bjr.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/v/vi2_iacgi.css';
import '../../css/n/n3ijr1bwe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lezjbfb4s"/><path clip-rule="evenodd" class="mauff2bjr"/><g class="xtpeb-edw"><path class="vi2_iacgi"/><path class="n3ijr1bwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:running-round-bold-duotone"} {...others} />);
}

export default Component;
