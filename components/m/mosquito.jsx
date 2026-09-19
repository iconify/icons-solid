import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b1x-nvq2t.css';
import '../../css/t/tm571ewkb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="b1x-nvq2t"/><path class="tm571ewkb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:mosquito"} {...others} />);
}

export default Component;
