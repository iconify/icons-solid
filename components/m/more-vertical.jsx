import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wmzeeu32g.css';
import '../../css/p/peiq2hfxm.css';
import '../../css/d/dk6s0gbmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><circle transform="rotate(-90 12 18)" class="wmzeeu32g"/><circle transform="rotate(-90 12 12)" class="peiq2hfxm"/><circle transform="rotate(-90 12 6)" class="dk6s0gbmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:more-vertical"} {...others} />);
}

export default Component;
