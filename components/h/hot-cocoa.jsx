import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/moq3kh0mt.css';
import '../../css/n/ncf1enbzb.css';
import '../../css/z/z491_8boq.css';
import '../../css/m/m9wy-hfmq.css';
import '../../css/o/ossd1-b-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="moq3kh0mt wm-k"/><path class="ncf1enbzb wm-a"/><path class="z491_8boq"/><path class="m9wy-hfmq"/><path class="ossd1-b-n wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:hot-cocoa"} {...others} />);
}

export default Component;
