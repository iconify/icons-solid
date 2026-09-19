import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s4xf7_lqd.css';
import '../../css/b/b4h22tbjt.css';
import '../../css/i/imbmv_-3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s4xf7_lqd"/><path class="b4h22tbjt"/><path class="imbmv_-3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:image-counter-clockwise"} {...others} />);
}

export default Component;
