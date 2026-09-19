import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ki2r-cc_u.css';
import '../../css/g/g2r7h396f.css';
import '../../css/u/u-st2nb0e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ki2r-cc_u"/><path clip-rule="evenodd" class="g2r7h396f"/><path class="u-st2nb0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:copper-iud-24px"} {...others} />);
}

export default Component;
