import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yx831zb_d.css';
import '../../css/y/yy94u4n_o.css';
import '../../css/q/qc84pjfnr.css';
import '../../css/p/patgbmbdg.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="yx831zb_d"/><path clip-rule="evenodd" class="yy94u4n_o"/><path class="qc84pjfnr"/><path clip-rule="evenodd" class="patgbmbdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:gifts-outline"} {...others} />);
}

export default Component;
