import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wr5lmfzzp.css';
import '../../css/r/rr6yxmb6f.css';
import '../../css/c/crs0k7bit.css';
import '../../css/y/yw6_fjbsi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="wr5lmfzzp"/><path class="rr6yxmb6f"/><path class="crs0k7bit"/><path class="yw6_fjbsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:running-duo"} {...others} />);
}

export default Component;
