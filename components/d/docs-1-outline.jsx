import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spbusxb1r.css';
import '../../css/r/rx4tebybx.css';
import '../../css/m/m_lms727n.css';
import '../../css/r/rb1btvicu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="spbusxb1r"/><path class="rx4tebybx"/><path class="m_lms727n"/><path class="rb1btvicu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:docs-1-outline"} {...others} />);
}

export default Component;
