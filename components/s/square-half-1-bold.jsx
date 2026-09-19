import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zaznb6ikb.css';
import '../../css/m/mcrgcvfnv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><rect class="zaznb6ikb"/><path clip-rule="evenodd" class="mcrgcvfnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:square-half-1-bold"} {...others} />);
}

export default Component;
