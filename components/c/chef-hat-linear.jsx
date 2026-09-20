import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cjw43km3x.css';
import '../../css/f/f6tgfew3u.css';
import '../../css/z/zkglr3x2x.css';
import '../../css/l/l5mj12bgx.css';
import '../../css/e/ebv-q-bhi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cjw43km3x"/><path class="f6tgfew3u"/><path class="zkglr3x2x"/><path class="l5mj12bgx"/><path class="ebv-q-bhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chef-hat-linear"} {...others} />);
}

export default Component;
