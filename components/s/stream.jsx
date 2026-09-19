import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xr6selbya.css';
import '../../css/f/fsdcy2b0y.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ufeehvblu"><path class="xr6selbya"/><path class="fsdcy2b0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:stream"} {...others} />);
}

export default Component;
