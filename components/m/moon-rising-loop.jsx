import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thid7e.css';
import '../../css/g/gwaamo.css';
import '../../css/y/ydovum.css';
import '../../css/u/ud3ngs.css';
import '../../css/t/tiiyvt.css';
import '../../css/z/z52z6h.css';
import '../../css/d/d-k-hl-x.css';
import '../../css/f/fade-d1si2b.css';
import '../../css/f/fade-6y6uho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="thid7e"/><path class="gwaamo ydovum"/><path class="ud3ngs ydovum"/><path class="tiiyvt ydovum"/><path class="ydovum z52z6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:moon-rising-loop"} {...others} />);
}

export default Component;
