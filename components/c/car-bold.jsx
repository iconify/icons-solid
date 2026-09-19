import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ldpwkl4dd.css';
import '../../css/f/f8dyh-3bv.css';
import '../../css/g/g2ybw9bac.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="ldpwkl4dd"/><path clip-rule="evenodd" class="f8dyh-3bv"/><path clip-rule="evenodd" class="g2ybw9bac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:car-bold"} {...others} />);
}

export default Component;
