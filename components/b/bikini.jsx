import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hzuyhbbzv.css';
import '../../css/w/wp3-z_51t.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="hzuyhbbzv"/><path class="wp3-z_51t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:bikini"} {...others} />);
}

export default Component;
