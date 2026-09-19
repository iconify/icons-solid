import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1ybgbbdc.css';
import '../../css/i/i8z0jbt_r.css';
import '../../css/v/vpkefzb4t.css';
import '../../css/m/m58z14bch.css';
import '../../css/v/vnm3c7e4s.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="r1ybgbbdc"/><path class="i8z0jbt_r"/><path class="vpkefzb4t"/><path class="m58z14bch"/><path clip-rule="evenodd" class="vnm3c7e4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:layer-back"} {...others} />);
}

export default Component;
