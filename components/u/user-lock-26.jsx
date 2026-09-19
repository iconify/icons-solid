import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sng8ypbhk.css';
import '../../css/c/cq51ogb1m.css';
import '../../css/k/khg43zqkt.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><circle class="sng8ypbhk"/><path class="cq51ogb1m"/><rect class="khg43zqkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:user-lock-26"} {...others} />);
}

export default Component;
