import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qtxwlnbka.css';
import '../../css/x/xfkepfife.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="qtxwlnbka"/><path class="xfkepfife"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:save-bold"} {...others} />);
}

export default Component;
