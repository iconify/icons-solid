import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8nofnwha.css';
import '../../css/v/v1eiv24xr.css';
import '../../css/p/p7bg0ij5t.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="h8nofnwha"/><path class="v1eiv24xr"/><path class="p7bg0ij5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sort-amount-down-bold"} {...others} />);
}

export default Component;
