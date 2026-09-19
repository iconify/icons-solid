import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a9p14lbzj.css';
import '../../css/x/xi_9gzk6d.css';
import '../../css/w/w69p6vbed.css';
import '../../css/a/a9y4_e-0f.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="a9p14lbzj"/><path clip-rule="evenodd" class="xi_9gzk6d"/><path class="w69p6vbed"/><path clip-rule="evenodd" class="a9y4_e-0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layer-plus-outline"} {...others} />);
}

export default Component;
