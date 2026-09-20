import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nk3rbzozu.css';
import '../../css/x/xz4uev04g.css';
import '../../css/g/g2zm781md.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nk3rbzozu"/><path class="xz4uev04g"/><path clip-rule="evenodd" class="g2zm781md"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-4-outline"} {...others} />);
}

export default Component;
