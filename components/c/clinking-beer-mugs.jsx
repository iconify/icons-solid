import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sg2f8hkpu.css';
import '../../css/j/juigwbcmn.css';
import '../../css/v/v2o85f3kl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="sg2f8hkpu"/><path class="juigwbcmn"/><path class="v2o85f3kl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:clinking-beer-mugs"} {...others} />);
}

export default Component;
