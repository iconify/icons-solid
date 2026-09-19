import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hhw25b6ip.css';
import '../../css/e/euhg6bb2m.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="hhw25b6ip"/><path clip-rule="evenodd" class="euhg6bb2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:heart-half-1-bold"} {...others} />);
}

export default Component;
