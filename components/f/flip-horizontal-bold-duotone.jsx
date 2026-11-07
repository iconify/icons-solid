import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/p/pb9gzdd5r.css';
import '../../css/f/f8c-vr1fw.css';
import '../../css/b/bi-4r3b3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="pb9gzdd5r"/><path class="f8c-vr1fw"/></g><path clip-rule="evenodd" class="bi-4r3b3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flip-horizontal-bold-duotone"} {...others} />);
}

export default Component;
