import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z6kxeq0nu.css';
import '../../css/s/s70b4ab4j.css';
import '../../css/m/mch7kacqs.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="z6kxeq0nu"/><path class="s70b4ab4j"/><path class="mch7kacqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:pregnant-woman"} {...others} />);
}

export default Component;
