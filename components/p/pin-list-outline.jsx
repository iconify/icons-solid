import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w222tbclf.css';
import '../../css/b/bg2z60l4k.css';
import '../../css/f/fcsgee45r.css';
import '../../css/d/drb7xldnm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w222tbclf"/><path class="bg2z60l4k"/><path class="fcsgee45r"/><path class="drb7xldnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pin-list-outline"} {...others} />);
}

export default Component;
