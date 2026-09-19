import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cu7qyy4za.css';
import '../../css/l/lx_8qqvkc.css';
import '../../css/d/d0b6c1bum.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cu7qyy4za"/><path class="lx_8qqvkc"/><path class="d0b6c1bum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:phone-remove-bold"} {...others} />);
}

export default Component;
