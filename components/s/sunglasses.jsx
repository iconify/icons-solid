import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v33jx1b4e.css';
import '../../css/w/w4okx46dt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="v33jx1b4e"/><path class="w4okx46dt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:sunglasses"} {...others} />);
}

export default Component;
